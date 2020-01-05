import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import { addMonths } from 'date-fns';
import { useParams } from 'react-router-dom';
import UnformDatePicker from '~/components/UnformDatePicker';

import api from '~/services/api';
import history from '~/services/history';
import UnformSelect from '~/components/UnformSelect';
import UnformAsyncSelect from '~/components/UnformAsyncSelect';
import { formatPrice } from '~/util/format';

import { addRequest } from '~/store/modules/registration/actions';

import { Container, Header, Content } from './styles';

export default function ManageRegistrations({ match }) {
  const { id } = match.params;
  const [registration, setRegistration] = useState({});
  const [planOptions, setPlanOptions] = useState([]);
  const [planSelected, setPlanSelected] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [inputStudent, setInputStudent] = useState('');
  const btnSubmit = useRef();

  const dispatch = useDispatch();

  const endDate = useMemo(
    () => addMonths(startDate, planSelected.duration || 0),
    [startDate, planSelected.duration]
  );

  const totalPrice = useMemo(() => planSelected.duration * planSelected.price, [
    planSelected.duration,
    planSelected.price,
  ]);

  useEffect(() => {
    async function getPlans() {
      const response = await api.get('plans');
      const options = response.data.rows.map(plan => ({
        ...plan,
        value: plan.id,
      }));
      setPlanOptions(options);
    }

    getPlans();
  }, []);

  async function getRegistration() {
    const response = await api.get(`registrations/${id}`);
    const { student, plan, ...data } = response.data;
    // console.tron.log(response.data);
    // setRegistration({
    //   ...data,
    // });
  }

  useEffect(() => {
    if (id) {
      getRegistration();
    }
  }, [id]);

  function submitForm() {
    btnSubmit.current.click();
  }

  function handleSubmit(data, { resetForm }) {
    data.student_id = inputStudent.id;
    dispatch(addRequest(data));
    // resetForm();
  }

  async function getStudents(value) {
    let students;
    if (value !== '') {
      const response = await api.get('students', {
        params: {
          q: value,
        },
      });

      students = response.data.rows.map(student => ({
        ...student,
        value: student.id,
        label: student.name,
      }));
      return students;
    }

    return [];
  }

  return (
    <Container>
      <Header>
        <h2>Cadastro de Matrícula</h2>
        <div>
          <button
            type="button"
            className="btn-back"
            onClick={() => history.push('/registrations')}
          >
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
        <Form initialData={registration} onSubmit={handleSubmit}>
          <div className="input-fields" style={{ marginBottom: 15 }}>
            <div className="input-select-container" style={{ marginRight: 0 }}>
              <UnformAsyncSelect
                name="student_id"
                label="Aluno"
                placeholder="Buscar aluno"
                value={inputStudent}
                onChange={selected => setInputStudent(selected)}
                loadOptions={getStudents}
              />
            </div>
          </div>
          <div className="input-fields">
            <div className="input-select-container">
              <UnformSelect
                name="plan_id"
                label="Plano"
                placeholder="Selecione o plano"
                className="input-select"
                options={planOptions}
                onChange={event => setPlanSelected(event)}
              />
            </div>
            <div className="input-field">
              <UnformDatePicker
                autoComplete="off"
                label="Data de Início"
                name="start_date"
                todayButton="Hoje"
                selected={startDate}
                onChange={date => setStartDate(date)}
                placeholderText="Date de início"
              />
            </div>
            <div className="input-field">
              <UnformDatePicker
                name="end_date"
                label="Data de Término"
                selected={endDate}
                disabled
                readOnly
                autoComplete="off"
              />
            </div>
            <div className="input-field">
              <Input
                name="total_price"
                label="Valor Final"
                disabled
                value={formatPrice(totalPrice || 0)}
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

ManageRegistrations.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }),
};

ManageRegistrations.defaultProps = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: null,
    }),
  }),
};
