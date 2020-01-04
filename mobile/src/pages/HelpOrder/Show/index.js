import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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

export default function Show({ navigation }) {
  const helpOrder = navigation.getParam('helpOrder');

  return (
    <Container>
      <View style={styles.flex}>
        <Label>Pergunta</Label>
        <Text style={styles.hour}>{helpOrder.date}</Text>
      </View>
      <Text style={styles.text}>{helpOrder.question}</Text>
      <Label>Resposta</Label>
      <Text style={styles.text}>{helpOrder.answer || 'Sem resposta'}</Text>
    </Container>
  );
}
