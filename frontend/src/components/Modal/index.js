import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Modal({ data, onHandleSubmit }) {
  const { status, values } = data;

  return (
    <Container open={status}>
      <Form onSubmit={onHandleSubmit}>
        <strong>Pergunta do Aluno</strong>
        <p>{values.question}</p>
        <Input name="id" hidden readOnly value={values.id || ''} />
        <Input
          name="answer"
          multiline
          label="Resposta"
          placeholder="Digite a resposta..."
        />
        <button type="submit">Responder aluno</button>
      </Form>
    </Container>
  );
}

Modal.propTypes = {
  data: PropTypes.shape({
    status: PropTypes.bool,
    values: PropTypes.objectOf(PropTypes.any),
  }),
  onHandleSubmit: PropTypes.func,
};

Modal.defaultProps = {
  data: PropTypes.shape({
    status: false,
    values: {
      id: '',
    },
  }),
};
