import HelpOrder from '../models/HelpOrder';
import Student from '../models/Student';

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
      include: [
        {
          model: Student,
          as: 'student',
          attributes: {
            exclude: ['createdAt', 'updatedAt'],
          },
        },
      ],
    });

    return response.json(helpOrders);
  }
}

export default new NoAnswerHelpOrderController();
