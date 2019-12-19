import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text, StyleSheet } from 'react-native';

import Header from '../../components/Header';

import {
  Container,
  Content,
  Button,
  ButtonText,
  List,
  ListItem,
} from './styles';

const styles = StyleSheet.create({
  number: {
    fontWeight: 'bold',
  },
  date: {
    color: '#bbb',
  },
});

export default function Checkins() {
  const [checkins, setCheckins] = useState([
    {
      id: 1,
      date: 'Hoje às 14h',
    },
    {
      id: 2,
      date: 'Ontem às 20h',
    },
    {
      id: 3,
      date: 'Há 3 dias',
    },
    {
      id: 4,
      date: 'Há 1 semana',
    },
    {
      id: 5,
      date: 'Há 2 semanas',
    },
    {
      id: 6,
      date: 'Há 1 mês',
    },
    {
      id: 7,
      date: 'Há 3 meses',
    },
    {
      id: 8,
      date: 'Há 4 meses',
    },
    {
      id: 9,
      date: 'Há 5 meses',
    },
  ]);

  return (
    <Container>
      <Header />
      <Content>
        <Button>
          <ButtonText>Novo Check-in</ButtonText>
        </Button>
        <List
          data={checkins}
          keyExtractor={checkin => String(checkin.id)}
          renderItem={({ item }) => (
            <ListItem>
              <Text style={styles.number}>{`Check-in #${item.id}`}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </ListItem>
          )}
        />
      </Content>
    </Container>
  );
}

const tabBarIcon = ({ tintColor }) => (
  <Icon name="edit-location" size={20} color={tintColor} />
);

tabBarIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

Checkins.navigationOptions = {
  tabBarLabel: 'Check-ins',
  tabBarIcon,
};
