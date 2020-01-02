import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '../../../components/Header';

import {
  Container,
  Content,
  Button,
  ButtonText,
  List,
  ListItem,
  StatusQuestion,
  Question,
} from './styles';

const styles = StyleSheet.create({
  answerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  questionCreate: {
    color: '#666',
    fontSize: 14,
  },
});

export default function ListPage({ navigation }) {
  const [helpOrders, setHelpOrders] = useState([
    {
      id: 1,
      answer: true,
      created_at: 'Hoje às 14h',
      question:
        'Olá pessoal da academia, gostaria de saber se quando acordar devo ingerir batata doce e frango logo de primeira, preparar as...',
    },
    {
      id: 2,
      answer: false,
      created_at: 'Hoje às 14h',
      question:
        'Olá pessoal da academia, gostaria de saber se quando acordar devo ingerir batata doce e frango logo de primeira, preparar as...',
    },
  ]);

  function handleShowInfo(id) {
    navigation.navigate('Show', { id });
  }

  function handleCreate() {
    navigation.navigate('Create');
  }

  return (
    <Container>
      <Header />
      <Content>
        <Button onPress={handleCreate}>
          <ButtonText>Novo pedido de auxílio</ButtonText>
        </Button>
        <List
          data={helpOrders}
          keyExtractor={helpOrder => String(helpOrder.id)}
          renderItem={({ item }) => (
            <ListItem onPress={() => handleShowInfo(item.id)}>
              <View style={styles.info}>
                <View style={styles.answerContainer}>
                  <Icon
                    name="check-circle"
                    color={item.answer ? '#42CB59' : '#999'}
                    size={20}
                  />
                  <StatusQuestion status={item.answer}>
                    {item.answer ? 'Respondido' : 'Sem resposta'}
                  </StatusQuestion>
                </View>
                <Text style={styles.questionCreate}>{item.created_at}</Text>
              </View>
              <Question>{item.question}</Question>
            </ListItem>
          )}
        />
      </Content>
    </Container>
  );
}
