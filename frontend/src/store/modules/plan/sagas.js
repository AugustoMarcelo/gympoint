import { takeLatest, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

export function* addPlan({ payload }) {
  try {
    const { data } = payload;

    yield call(api.post, '/plans', {
      ...data,
    });

    toast.success('Plano inserido com sucesso');
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export function* updatePlan({ payload }) {
  try {
    const { data, id } = payload;

    yield call(api.put, `/plans/${id}`, {
      ...data,
    });

    toast.success('Plano atualizado com sucesso');
    history.push('/plans');
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export default all([
  takeLatest('@plan/ADD_REQUEST', addPlan),
  takeLatest('@plan/UPDATE_REQUEST', updatePlan),
]);
