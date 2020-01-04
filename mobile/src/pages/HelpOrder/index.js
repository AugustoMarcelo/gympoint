import React from 'react';
// import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '../../components/Header';
import List from './ListPage';
import Show from './Show';
import Create from './Create';

const tabBarIcon = ({ tintColor }) => (
  <Icon name="live-help" size={20} color={tintColor} />
);

export default createStackNavigator(
  {
    List,
    Show,
    Create,
  },
  {
    navigationOptions: {
      tabBarLabel: 'Pedir Ajuda',
      tabBarIcon,
    },
    defaultNavigationOptions: {
      headerBackground: <Header />,
      headerBackImage: () => (
        <Icon name="arrow-back" size={24} color="#000" />
      ),
      headerBackTitle: null,
    },
  }
);
