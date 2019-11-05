import HelpOrder from '../models/HelpOrder';

class NoAnswerHelpOrderController {
  async index(request, response) {
    const { page = 1, limit = 10 } = request.query;
    const offset = (page - 1) * limit;

    const helpOrders = await HelpOrder.findAndCountAll({
      where: {
        answer_at: null,
      },
      limit,
      offset,
    });

    return response.json(helpOrders);
  }
}

export default new NoAnswerHelpOrderController();
