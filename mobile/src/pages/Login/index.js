import React, { useState } from 'react';
import { Platform, Image } from 'react-native';

import logo from '../../assets/logo.png';

import { Container, Title, Input, Button, ButtonText } from './styles';

export default function Login({ navigation }) {
  const [id, setId] = useState('');

  async function handleLogin() {
    navigation.navigate('Main', { id });
  }

  return (
    <Container behavior="padding" enabled={Platform.OS === 'ios'}>
      <Image source={logo} />
      <Title>GYMPOINT</Title>
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Informe seu ID de cadastro"
        value={id}
        onChangeText={setId}
      />
      <Button onPress={handleLogin}>
        <ButtonText>Entrar no sistema</ButtonText>
      </Button>
    </Container>
  );
}
