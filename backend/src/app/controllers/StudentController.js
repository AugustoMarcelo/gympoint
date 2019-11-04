import * as Yup from 'yup';
import { Op } from 'sequelize';

import Student from '../models/Student';
import Registration from '../models/Registration';

class StudentController {
  async index(request, response) {
    let where = {};
    const { q } = request.query;

    if (q) {
      where = {
        name: {
          [Op.iLike]: `%${q}%`,
        },
      };
    }

    const students = await Student.findAll({
      where,
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
      include: [
        {
          model: Registration,
          as: 'registration',
          attributes: ['end_date'],
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
}

export default new StudentController();
