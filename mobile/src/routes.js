import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Login from '~/pages/Login';
import HelpOrder from '~/pages/HelpOrder';
import HelpOrders from '~/pages/HelpOrders';
import ManageHelpOrder from '~/pages/ManageHelpOrder';
import Checkins from '~/pages/Checkins';

export default createAppContainer(
  createSwitchNavigator({
    Login,
    Main: createBottomTabNavigator(
      {
        Checkins,
        HelpOrders: createSwitchNavigator({
          HelpOrders,
          HelpOrder,
          ManageHelpOrder,
        }),
      },
      {
        tabBarOptions: {
          keyboardHidesTabBar: true,
          activeTintColor: '#EE4E62',
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
