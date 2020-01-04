import React, { useState } from 'react';
import { ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../../services/api';

import { Content, Input, Button, ButtonText } from './styles';

export default function Create() {
  const [question, setQuestion] = useState('');

  async function handleHelpOrder() {
    const id = await AsyncStorage.getItem('id');

    if (question) {
      const { status } = await api.post(`/students/${id}/help-orders`, {
        question,
      });

      ToastAndroid.show(getMessageStatus(status), ToastAndroid.LONG);
    } else {
      ToastAndroid.show('Descreva seu pedido', ToastAndroid.LONG);
    }
  }

  function getMessageStatus(status) {
    const messages = {
      201: () => {
        setQuestion('');
        return 'Pedido registrado com sucesso';
      },
      404: () => 'Aluno não encontrado. Tente novamente mais tarde',
      default: () => 'Não foi possível registrar seu pedido.',
    };

    return (messages[status] || messages.default)();
  }

  return (
    <>
      <Content>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Inclua seu pedido de auxílio"
          value={question}
          onChangeText={setQuestion}
          multiline
          textAlignVertical="top"
        />
        <Button onPress={handleHelpOrder}>
          <ButtonText>Enviar pedido</ButtonText>
        </Button>
      </Content>
    </>
  );
}
