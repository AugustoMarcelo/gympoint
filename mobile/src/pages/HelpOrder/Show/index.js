import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Header from '../../../components/Header';

import { Container, Label } from './styles';

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  hour: {
    color: '#666',
  },
  text: {
    color: '#666',
    marginVertical: 15,
    lineHeight: 26,
  },
});

export default function Show() {
  return (
    <>
      <Container>
        <View style={styles.flex}>
          <Label>Pergunta</Label>
          <Text style={styles.hour}>Hoje às 14h</Text>
        </View>
        <Text style={styles.text}>
          Olá pessoal da academia, gostaria de saber se quando acordar devo
          ingerir batata doce e frango logo de primeira, preparar as...
        </Text>
        <Label>Resposta</Label>
        <Text style={styles.text}>
          Opa, isso aí, duas em duas horas, não deixa pra depois, um monstro
          treina como um, come como dois.
        </Text>
      </Container>
    </>
  );
}
