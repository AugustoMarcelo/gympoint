import React from 'react';
import { takeLatest, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import CustomToast from '../../../components/CustomToast';

export function* addRegistration({ payload }) {
  try {
    const { data } = payload;

    yield call(api.post, `/students/${data.student_id}/registrations`, {
      ...data,
    });

    toast(<CustomToast message="Matrícula realizada com sucesso" />);
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export function* updateRegistration({ payload }) {
  try {
    const { data, id } = payload;

    yield call(api.put, `/registrations/${id}`, {
      ...data,
    });

    toast.success('Matrícula atualizada com sucesso');
    history.push('/registrations');
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export default all([
  takeLatest('@registration/ADD_REQUEST', addRegistration),
  takeLatest('@registration/UPDATE_REQUEST', updateRegistration),
]);
