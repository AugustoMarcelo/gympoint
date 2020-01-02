import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Login from './pages/Login';
import Checkins from './pages/Checkins';
import HelpOrder from './pages/HelpOrder';

export default createAppContainer(
  createSwitchNavigator({
    Login,
    Main: createBottomTabNavigator(
      {
        Checkins,
        HelpOrder,
      },
      {
        tabBarOptions: {
          keyboardHidesTabBar: true,
          activeTintColor: '#ee4e62',
          inactiveTintColor: '#999999',
          style: {
            backgroundColor: '#fff',
            paddingVertical: 5,
          },
        },
      }
    ),
  })
);
