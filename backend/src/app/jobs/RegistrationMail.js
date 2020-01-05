import { parseISO, format } from 'date-fns';

import Mail from '../../lib/Mail';

import { formatPrice } from '../utils/format';

class RegistrationMail {
  get key() {
    return 'RegistrationMail';
  }

  async handle({ data }) {
    const { student, plan, end_date, price } = data;

    await Mail.sendMail({
      to: `${student.name} <${student.email}>`,
      subject: 'Gympoint | Matrícula confirmada!',
      template: 'registration',
      context: {
        student: student.name,
        plan: plan.title,
        end_date: format(parseISO(end_date), 'dd/MM/yyyy'),
        price: formatPrice(price),
      },
    });
  }
}

export default new RegistrationMail();
