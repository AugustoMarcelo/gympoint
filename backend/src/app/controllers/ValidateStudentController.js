import * as Yup from 'yup';
import Student from '../models/Student';

class ValidateStudentController {
  async index(request, response) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
    });

    if (!(await schema.isValid(request.params))) {
      return response.status(400).json({ error: 'Validation fails' });
    }

    const { id } = request.params;

    const student = await Student.findByPk(id);

    if (!student) {
      return response.status(404).json({ error: 'Student not found' });
    }

    return response.status(200).json(student);
  }
}

export default new ValidateStudentController();
