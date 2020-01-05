import React from 'react';
import { takeLatest, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import CustomToast from '~/components/CustomToast';
import api from '~/services/api';

export function* answerHelpOrder({ payload }) {
  try {
    const {
      data: { id, answer },
    } = payload;

    yield call(api.put, `help-orders/${id}/answers`, {
      answer,
    });

    toast(<CustomToast message="Pedido de auxílio respondido" />);
  } catch (error) {
    toast.error(error.response.data.error);
  }
}

export default all([takeLatest('@helporder/UPDATE_REQUEST', answerHelpOrder)]);
