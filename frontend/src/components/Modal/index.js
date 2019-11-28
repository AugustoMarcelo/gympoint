import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { MdClose } from 'react-icons/md';

import { Container } from './styles';

const schema = Yup.object().shape({
  id: Yup.string().required(),
  answer: Yup.string().required('Preenchimento do campo é obrigatório'),
});

export default function Modal({ data, onHandleSubmit, onClose }) {
  const { status, loading, values } = data;

  return (
    <Container open={status}>
      <Form schema={schema} onSubmit={onHandleSubmit}>
        <div className="header">
          <strong>Pergunta do Aluno</strong>
          <span
            tabIndex="0"
            role="button"
            onKeyPress={event => console.tron.log(event)}
            onClick={onClose}
            title="Fechar formulário"
          >
            <MdClose size={24} color="#bbb" />
          </span>
        </div>
        <p>{values.question}</p>
        <Input name="id" hidden readOnly value={values.id || ''} />
        <Input
          name="answer"
          multiline
          label="Resposta"
          placeholder="Digite a resposta..."
        />
        <button disabled={loading} type="submit">
          {loading ? 'Atualizando...' : 'Responder aluno'}
        </button>
      </Form>
    </Container>
  );
}

Modal.propTypes = {
  data: PropTypes.shape({
    status: PropTypes.bool,
    loading: PropTypes.bool,
    values: PropTypes.objectOf(PropTypes.any),
  }),
  onHandleSubmit: PropTypes.func,
  onClose: PropTypes.func,
};

Modal.defaultProps = {
  data: PropTypes.shape({
    status: false,
    values: {
      id: '',
    },
    loading: false,
  }),
};
