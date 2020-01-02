import React, { useState } from 'react';

import Header from '../../../components/Header';

import { Content, Input, Button, ButtonText } from './styles';

export default function Create() {
  const [question, setQuestion] = useState('');

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
        <Button>
          <ButtonText>Enviar pedido</ButtonText>
        </Button>
      </Content>
    </>
  );
}
