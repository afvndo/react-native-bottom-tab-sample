import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Config from '../pages/Config';
import Main from '../pages/Main';

const Tab = createBottomTabNavigator();

function AppRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      tabBarOptions={{
        activeTintColor: 'yellow',
        style: {backgroundColor: 'darkblue'},
      }}>
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          tabBarLabel: 'Main',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Config"
        component={Config}
        options={{
          tabBarLabel: 'Config',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="cog-sync" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppRoutes;
