import HelpOrder from '../models/HelpOrder';

class NoAnswerHelpOrderController {
  async index(request, response) {
    const helpOrders = await HelpOrder.findAndCountAll({
      where: {
        answer_at: null,
      },
    });

    return response.json(helpOrders);
  }
}

export default new NoAnswerHelpOrderController();
