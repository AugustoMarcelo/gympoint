import React, { useRef, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { MdCheck, MdKeyboardArrowLeft } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import history from '~/services/history';
import api from '~/services/api';

import { addRequest, updateRequest } from '~/store/modules/plan/actions';

import { Container, Header, Content } from './styles';

const schema = Yup.object().shape({
  title: Yup.string().required('O título é obrigatório'),
  duration: Yup.number()
    .typeError('Informe um número')
    .required('A duração é obrigatória'),
  price: Yup.number().required('O preço é obrigatório'),
});

export default function ManagePlans({ match }) {
  const { id } = match.params;
  const [plan, setPlan] = useState({});
  const [duration, setDuration] = useState(0);
  const [total, setTotal] = useState();

  const dispatch = useDispatch();
  const btnSubmit = useRef();

  function submitForm() {
    btnSubmit.current.click();
  }

  function handleSubmit(data, { resetForm }) {
    if (!id) dispatch(addRequest(data));
    else dispatch(updateRequest(data, id));

    resetForm();
    setDuration(0);
    setTotal(0);
  }

  function handleBack() {
    history.push('/plans');
  }

  function calcTotalPrice(e) {
    const { value } = e.target;
    setTotal(value * duration);
  }

  async function getPlan() {
    const response = await api.get(`plans/${id}`);
    setPlan(response.data);
    setDuration(response.data.duration);
    setTotal(response.data.duration * response.data.price);
  }

  useEffect(() => {
    if (id) {
      getPlan();
    }
  }, [id]);

  return (
    <Container>
      <Header>
        <h2>Cadastro de Planos</h2>
        <div>
          <button type="button" className="btn-back" onClick={handleBack}>
            <MdKeyboardArrowLeft
              size={20}
              color="#fff"
              style={{ marginRight: '5' }}
            />{' '}
            Voltar
          </button>
          <button type="button" className="btn-save" onClick={submitForm}>
            <MdCheck size={20} color="#fff" style={{ marginRight: '5' }} />{' '}
            Salvar
          </button>
        </div>
      </Header>
      <Content>
        <Form initialData={plan} schema={schema} onSubmit={handleSubmit}>
          <Input
            name="title"
            placeholder="Descrição do plano"
            label="Título do plano"
            autoComplete="off"
          />
          <div>
            <div>
              <Input
                name="duration"
                type="number"
                label="Duração (em meses)"
                autoComplete="off"
                value={duration}
                onChange={e => setDuration(e.target.value)}
              />
            </div>
            <div>
              <Input
                name="price"
                type="number"
                onBlur={calcTotalPrice}
                label="Preço Mensal"
                autoComplete="off"
              />
            </div>
            <div>
              <Input
                name="total"
                type="number"
                label="Preço Total"
                disabled
                value={total}
                autoComplete="off"
              />
            </div>
          </div>
          <button ref={btnSubmit} hidden type="submit">
            Send
          </button>
        </Form>
      </Content>
    </Container>
  );
}

ManagePlans.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

ManagePlans.defaultProps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: null,
    }),
  }),
};
