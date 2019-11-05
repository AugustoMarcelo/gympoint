import * as Yup from 'yup';
import { parseISO, addMonths } from 'date-fns';

import Registration from '../models/Registration';
import Student from '../models/Student';
import Plan from '../models/Plan';
import RegistrationMail from '../jobs/RegistrationMail';
import Queue from '../../lib/Queue';

class RegistrationController {
  async index(request, response) {
    const { page = 1, limit = 10 } = request.query;
    const offset = (page - 1) * limit;

    const registrations = await Registration.findAndCountAll({
      limit,
      offset,
      attributes: ['id', 'start_date', 'end_date', 'price', 'active'],
      include: [
        {
          model: Student,
          as: 'student',
          attributes: {
            exclude: ['createdAt', 'updatedAt'],
          },
        },
        {
          model: Plan,
          as: 'plan',
          attributes: {
            exclude: ['createdAt', 'updatedAt'],
          },
        },
      ],
    });

    return response.json(registrations);
  }

  async store(request, response) {
    const schema = Yup.object().shape({
      plan_id: Yup.number().required(),
      start_date: Yup.date().required(),
    });

    // Get the student id param
    const { student_id } = request.params;
    const { plan_id, start_date } = request.body;

    // Search for the student
    const student = await Student.findByPk(student_id);

    // Check if student exists
    if (!student) {
      return response.status(404).json({ error: 'Student not found' });
    }

    const plan = await Plan.findByPk(plan_id);

    // Check if Plan exists
    if (!plan) {
      return response.status(404).json({ error: 'Plan not found' });
    }

    // Check if the informed data are valid
    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validation fails' });
    }

    // End of the registration
    const end_date = addMonths(parseISO(start_date), plan.duration);
    // Total price
    const price = plan.price * plan.duration;

    const registration = await Registration.create({
      student_id,
      plan_id,
      start_date,
      end_date,
      price,
    });

    // Send email with registration informations
    await Queue.add(RegistrationMail.key, {
      student,
      plan,
      end_date,
      price,
    });

    return response.status(201).json(registration);
  }

  async update(request, response) {
    const schema = Yup.object().shape({
      start_date: Yup.date(),
      plan_id: Yup.number(),
    });

    const { id } = request.params;
    const { start_date, plan_id } = request.body;

    const registration = await Registration.findByPk(id);

    if (!registration) {
      return response.status(404).json({ error: 'Registration not found' });
    }

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validation fails' });
    }

    const plan = await Plan.findByPk(plan_id);

    // Check if Plan exists
    if (!plan) {
      return response.status(404).json({ error: 'Plan not found' });
    }

    // End of the registration
    const end_date = addMonths(parseISO(start_date), plan.duration);
    // Total price
    const price = plan.price * plan.duration;

    await registration.update({
      plan_id,
      start_date,
      end_date,
      price,
    });

    return response.status(200).json({
      plan_id,
      start_date,
      end_date,
      price,
    });
  }

  async delete(request, response) {
    const { id } = request.params;
    const registration = await Registration.findByPk(id);

    if (!registration) {
      return response.status(404).json({ error: 'Registration not found' });
    }

    await registration.destroy();

    return response
      .status(200)
      .json({ message: 'Registration successfully removed' });
  }
}

export default new RegistrationController();
