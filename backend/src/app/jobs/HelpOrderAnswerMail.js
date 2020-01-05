import Mail from '../../lib/Mail';

class HelpOrderAnswerMail {
  get key() {
    return 'HelpOrderAnswerMail';
  }

  async handle({ data }) {
    const { student, helpOrder, answer } = data;

    await Mail.sendMail({
      to: `${student.name} <${student.email}>`,
      subject: 'Gympoint | Respondemos sua pergunta!',
      template: 'question_answer',
      context: {
        student: student.name,
        question: helpOrder.question,
        answer,
      },
    });
  }
}

export default new HelpOrderAnswerMail();
