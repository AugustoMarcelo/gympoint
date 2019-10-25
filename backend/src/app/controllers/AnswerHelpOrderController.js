import * as Yup from 'yup';

import HelpOrder from '../models/HelpOrder';

class AnswerHelpOrderController {
  async update(request, response) {
    const schema = Yup.object().shape({
      answer: Yup.string().required(),
    });

    const { id } = request.params;
    const answer_at = new Date();
    const helpOrder = await HelpOrder.findByPk(id);

    if (!helpOrder) {
      return response.status(404).json({ error: 'Help order not found' });
    }

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validation fails' });
    }

    await helpOrder.update({
      ...request.body,
      answer_at,
    });

    return response
      .status(200)
      .json({ message: 'Help order successfully updated' });
  }
}

export default new AnswerHelpOrderController();
