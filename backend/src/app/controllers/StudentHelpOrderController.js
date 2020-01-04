import * as Yup from 'yup';

import Student from '../models/Student';
import HelpOrder from '../models/HelpOrder';

class StudentHelpOrderController {
  async index(request, response) {
    const { page = 1, limit = 10 } = request.query;
    const offset = (page - 1) * limit;

    const { id: student_id } = request.params;

    const student = await Student.findByPk(student_id);

    if (!student) {
      return response.status(404).json({ error: 'Student not found' });
    }

    const helpOrders = await HelpOrder.findAndCountAll({
      where: {
        student_id,
      },
      limit,
      offset,
      order: [['updatedAt', 'DESC']],
      attributes: {
        exclude: ['student_id'],
      },
    });

    return response.status(200).json(helpOrders);
  }

  async store(request, response) {
    const schema = Yup.object().shape({
      question: Yup.string().required(),
    });

    const { id } = request.params;
    const student = await Student.findByPk(id);

    if (!student) {
      return response.status(404).json({ error: 'Student not found' });
    }

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validation fails' });
    }

    const { question } = request.body;

    const helpOrder = await HelpOrder.create({
      student_id: id,
      question,
    });

    return response.status(201).json(helpOrder);
  }
}

export default new StudentHelpOrderController();
