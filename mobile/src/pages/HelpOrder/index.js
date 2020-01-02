import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import List from './ListPage';
import Show from './Show';
import Create from './Create';

const tabBarIcon = ({ tintColor }) => (
  <Icon name="live-help" size={20} color={tintColor} />
);

export default createSwitchNavigator(
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
  }
);
