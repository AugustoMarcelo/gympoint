import { parseISO, format } from 'date-fns';

import Mail from '../../lib/Mail';

class RegistrationMail {
  get key() {
    return 'RegistrationMail';
  }

  async handle({ data }) {
    const { student, plan, end_date, price } = data;

    await Mail.sendMail({
      to: `${student.name} <${student.email}>`,
      subject: 'Registration Confirmed',
      template: 'registration',
      context: {
        student: student.name,
        plan: plan.title,
        end_date: format(parseISO(end_date), 'yyyy-MM-dd'),
        price,
      },
    });
  }
}

export default new RegistrationMail();
