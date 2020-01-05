import React from 'react';
import { takeLatest, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import CustomToast from '~/components/CustomToast';

import api from '~/services/api';
import history from '~/services/history';

export function* addStudent({ payload }) {
  try {
    const { data } = payload;

    yield call(api.post, 'students', {
      ...data,
    });

    toast(<CustomToast message="Aluno cadastrado com sucesso" />);
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export function* updateStudent({ payload }) {
  try {
    const { data, id } = payload;

    yield call(api.put, `/students/${id}`, {
      ...data,
    });

    toast.success('Aluno atualizado com sucesso');
    history.push('/students');
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export default all([
  takeLatest('@student/ADD_REQUEST', addStudent),
  takeLatest('@student/UPDATE_REQUEST', updateStudent),
]);
