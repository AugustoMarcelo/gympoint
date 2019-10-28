import * as Yup from 'yup';

import HelpOrder from '../models/HelpOrder';
import Student from '../models/Student';

import HelpOrderAnswerMail from '../jobs/HelpOrderAnswerMail';
import Queue from '../../lib/Queue';

class AnswerHelpOrderController {
  async update(request, response) {
    const schema = Yup.object().shape({
      answer: Yup.string().required(),
    });

    const { id } = request.params;
    const answer_at = new Date();
    const helpOrder = await HelpOrder.findByPk(id);
    const student = await Student.findByPk(helpOrder.student_id);

    if (!helpOrder) {
      return response.status(404).json({ error: 'Help order not found' });
    }

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validation fails' });
    }

    const { answer } = request.body;

    await helpOrder.update({
      answer,
      answer_at,
    });

    // Send email with gym answer
    await Queue.add(HelpOrderAnswerMail.key, {
      student,
      helpOrder,
      answer,
    });

    return response
      .status(200)
      .json({ message: 'Help order successfully updated' });
  }
}

export default new AnswerHelpOrderController();
