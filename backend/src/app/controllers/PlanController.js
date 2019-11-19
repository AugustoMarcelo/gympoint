import * as Yup from 'yup';

import Plan from '../models/Plan';

class PlanController {
  async index(request, response) {
    const { page = 1, limit = 10 } = request.query;
    const offset = (page - 1) * limit;

    const plans = await Plan.findAndCountAll({
      limit,
      offset,
    });

    return response.status(200).json(plans);
  }

  async show(request, response) {
    const { id } = request.params;
    const plan = await Plan.findByPk(id);

    if (!plan) {
      return response.status(400).json({ error: 'Plan not found' });
    }

    return response.status(200).json(plan);
  }

  async store(request, response) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      duration: Yup.number().required(),
      price: Yup.number().required(),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validation fails' });
    }

    const plan = await Plan.create(request.body);

    return response.status(201).json(plan);
  }

  async update(request, response) {
    const schema = Yup.object().shape({
      title: Yup.string(),
      duration: Yup.number(),
      price: Yup.number(),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validation fails' });
    }

    const { id } = request.params;
    const plan = await Plan.findByPk(id);

    if (!plan) {
      return response.status(400).json({ error: 'Plan not found' });
    }

    const { title, duration, price } = await plan.update(request.body);

    return response.status(201).json({ id, title, duration, price });
  }

  async delete(request, response) {
    const { id } = request.params;
    const plan = await Plan.findByPk(id);

    if (!plan) {
      return response.status(400).json({ error: 'Plan not found' });
    }

    await plan.destroy();

    return response.status(200).json({ message: 'Plan successfully removed' });
  }
}

export default new PlanController();
