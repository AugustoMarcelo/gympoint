import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text, StyleSheet, ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { parseISO, formatDistance } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import Header from '../../components/Header';

import {
  Container,
  Content,
  Button,
  ButtonText,
  List,
  ListItem,
  Loading
} from './styles';

import api from '../../services/api';

const styles = StyleSheet.create({
  number: {
    fontWeight: 'bold',
  },
  date: {
    color: '#bbb',
  },
});

export default function Checkins({ navigation }) {
  const [checkins, setCheckins] = useState([]);
  const [id, setId] = useState();
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  async function loadCheckins() {
    const userId = await AsyncStorage.getItem('id');
    setId(userId);
    const response = await api.get(`/students/${userId}/checkins`, {
      params: {
        page,
      },
    });

    setCheckins(
      response.data.rows.map(checkin => ({
        id: checkin.id,
        date: formatDistance(parseISO(checkin.createdAt), new Date(), {
          addSuffix: true,
          locale: ptBR,
        }),
      }))
    );
    setTotal(response.data.count);
  }

  async function loadMore() {
    if (total && checkins.length === total) return;

    setLoading(true);

    const response = await api.get(`/students/${id}/checkins`, {
      params: {
        page: page + 1,
      },
    });

    setPage(page + 1);
    setCheckins([...checkins, ...response.data.rows]);
    setLoading(false);
  }

  async function refreshList() {
    setRefreshing(true);
    await loadCheckins();
    setRefreshing(false);
  }

  useEffect(() => {
    loadCheckins();
  }, []);

  async function handleCheckin() {
    const { status } = await api.post(`/students/${id}/checkins`);

    ToastAndroid.show(getMessageStatus(status), ToastAndroid.LONG);
  }

  function getMessageStatus(status) {
    const messages = {
      200: () => 'Você atingiu seu limite de 5 check-ins por semana!',
      201: () => {
        loadCheckins();
        return 'Check-in registrado com sucesso.';
      },
      default: () => 'Não foi possível realizar check-in.',
    };
    return (messages[status] || messages.default)();
  }

  return (
    <Container>
      <Header />
      <Content>
        <Button onPress={handleCheckin}>
          <ButtonText>Novo check-in</ButtonText>
        </Button>
        <List
          data={checkins}
          keyExtractor={checkin => String(checkin.id)}
          onRefresh={refreshList}
          refreshing={refreshing}
          onEndReachedThreshold={0.2}
          onEndReached={loadMore}
          ListFooterComponent={loading && <Loading />}
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
