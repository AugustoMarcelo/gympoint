import { Op } from 'sequelize';
import { subDays } from 'date-fns';
import * as Yup from 'yup';

import Student from '../models/Student';
import Checkin from '../models/Checkin';

class CheckinController {
  async index(request, response) {
    const schema = Yup.object().shape({
      id: Yup.number(),
    });

    if (!(await schema.isValid(request.params))) {
      return response.status(400).json({ error: 'Validation fails' });
    }

    const { page = 1, limit = 10 } = request.query;
    const offset = (page - 1) * limit;

    const { id: student_id } = request.params;

    const student = await Student.findByPk(student_id);

    if (!student) {
      return response.status(404).json({ error: 'Student not found' });
    }

    const checkins = await Checkin.findAndCountAll({
      where: { student_id },
      limit,
      offset,
      order: [['id', 'DESC']],
    });

    return response.status(200).json(checkins);
  }

  async store(request, response) {
    const schema = Yup.object().shape({
      id: Yup.number(),
    });

    if (!(await schema.isValid(request.params))) {
      return response.status(400).json({ error: 'Validation fails' });
    }

    const { id } = request.params;

    const student = await Student.findByPk(id);

    if (!student) {
      return response.status(404).json({ error: 'Student not found' });
    }

    const currentCheckDate = new Date();
    const checkInitalDate = subDays(currentCheckDate, 7);

    const { count } = await Checkin.findAndCountAll({
      where: {
        student_id: id,
        created_at: {
          [Op.between]: [checkInitalDate, currentCheckDate],
        },
      },
    });

    if (count >= 5) {
      return response.status(200).json({
        error: 'You have reached your limit of 5 check ins per week',
      });
    }

    const checkin = await Checkin.create({
      student_id: id,
    });

    return response.status(201).json(checkin);
  }
}

export default new CheckinController();
