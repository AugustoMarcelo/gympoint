import React, { useState } from 'react';
import { Platform, Image, ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';

import logo from '../../assets/logo.png';

import { Container, Title, Input, Button, ButtonText } from './styles';

export default function Login({ navigation }) {
  const [id, setId] = useState('');

  async function handleLogin() {
    if (id) {
      try {
        const { status } = await api.get(`/students/${id}/validate`);
        if (status === 200) {
          await AsyncStorage.setItem('id', id);
          navigation.navigate('Main');
          ToastAndroid.show(
            'Aluno validado! Seja bem-vindo',
            ToastAndroid.LONG
          );
        }
      } catch (error) {
        ToastAndroid.show('Aluno não encontrado', ToastAndroid.LONG);
      }
    } else {
      ToastAndroid.show('Você precisa informar o seu ID', ToastAndroid.LONG);
    }
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
