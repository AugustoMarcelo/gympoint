import * as Yup from 'yup';
import { Op } from 'sequelize';

import Student from '../models/Student';
import Registration from '../models/Registration';

class StudentController {
  async index(request, response) {
    let where = {};

    const { page = 1, limit = 10 } = request.query;
    const offset = (page - 1) * limit;

    const { q } = request.query;

    if (q) {
      where = {
        name: {
          [Op.iLike]: `%${q}%`,
        },
      };
    }

    const students = await Student.findAndCountAll({
      where,
      limit,
      offset,
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
      include: [
        {
          model: Registration,
          as: 'registration',
          attributes: ['start_date', 'end_date'],
        },
      ],
    });

    return response.status(200).json(students);
  }

  async store(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      age: Yup.number().required(),
      weight: Yup.number().required(),
      height: Yup.number().required(),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validation fails' });
    }

    const { id, name, email, age, weight, height } = await Student.create(
      request.body
    );

    return response.json({
      id,
      name,
      email,
      age,
      weight,
      height,
    });
  }

  async update(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      age: Yup.number(),
      weight: Yup.number(),
      height: Yup.number(),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validation fails' });
    }

    const { id } = request.params;

    const student = await Student.findByPk(id);

    if (!student) {
      return response.status(400).json({ error: 'Student not found' });
    }

    const { name, email, age, weight, height } = await student.update(
      request.body
    );

    return response.status(200).json({ id, name, email, age, weight, height });
  }

  async show(request, response) {
    const { id } = request.params;

    const student = await Student.findByPk(id);

    if (!student) {
      return response.status(400).json({ error: 'Student not found' });
    }

    return response.status(200).json(student);
  }

  async delete(request, response) {
    const { id } = request.params;
    const student = await Student.findByPk(id);

    if (!student) {
      return response.status(404).json({ error: 'Student not found' });
    }

    await student.destroy();

    return response
      .status(200)
      .json({ message: 'Student successfully removed' });
  }
}

export default new StudentController();
