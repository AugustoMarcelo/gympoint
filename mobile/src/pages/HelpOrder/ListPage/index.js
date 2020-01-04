import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-community/async-storage';
import { parseISO, formatDistance } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import api from '../../../services/api';

import {
  Container,
  Content,
  Button,
  ButtonText,
  List,
  ListItem,
  StatusQuestion,
  Question,
  Loading
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
  const [helpOrders, setHelpOrders] = useState([]);
  const [id, setId] = useState();
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  async function loadHelpOrders() {
    const userId = await AsyncStorage.getItem('id');
    setId(userId);
    const response = await api.get(`/students/${userId}/help-orders`, {
      params: {
        page,
      }
    });

    setHelpOrders(
      response.data.rows.map(helpOrder => ({
        ...helpOrder,
        date: formatDistance(parseISO(helpOrder.createdAt), new Date(), {
          addSuffix: true,
          locale: ptBR,
        }),
      }))
    );
    setTotal(response.data.count);
  }

  async function loadMore() {
    if (total && helpOrders.length === total) return;

    setLoading(true);

    const response = await api.get(`/students/${id}/help-orders`, {
      params: {
        page: page + 1,
      }
    });

    setPage(page + 1);
    setHelpOrders([...helpOrders, response.data.rows.map(helpOrder => ({
      ...helpOrder,
      date: formatDistance(parseISO(helpOrder.createdAt), new Date(), {
        addSuffix: true,
        locale: ptBR,
      }),
    }))]);
    setLoading(false);
  }

  async function refreshList() {
    setRefreshing(true);
    await loadHelpOrders();
    setRefreshing(false);
  }

  useEffect(() => {
    loadHelpOrders();
  }, []);

  function handleShowInfo(id) {
    const helpOrder = helpOrders.find(help => help.id === id);
    navigation.navigate('Show', {
      helpOrder,
    });
  }

  function handleCreate() {
    navigation.navigate('Create');
  }

  return (
    <Container>
      <Content>
        <Button onPress={handleCreate}>
          <ButtonText>Novo pedido de auxílio</ButtonText>
        </Button>
        <List
          data={helpOrders}
          keyExtractor={helpOrder => String(helpOrder.id)}
          onRefresh={refreshList}
          refreshing={refreshing}
          onEndReachedThreshold={0.2}
          onEndReached={loadMore}
          ListFooterComponent={loading && <Loading />}
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
                <Text style={styles.questionCreate}>{item.date}</Text>
              </View>
              <Question>{item.question}</Question>
            </ListItem>
          )}
          ListEmptyComponent={
            <View style={{ alignItems: 'center', padding: 10 }}>
              <Text>Nenhum pedido cadastrado...</Text>
            </View>
          }
        />
      </Content>
    </Container>
  );
}
