import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Insert from '../screens/insert';
import ViewData from '../screens/view_data';
import {COLORS} from '../constants';

const Tab = createBottomTabNavigator();

function BottomNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: COLORS.gradient_end,
          borderTopWidth: 0,
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Insert') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'View') {
            iconName = focused ? 'search' : 'search-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Insert" component={Insert} />
      <Tab.Screen name="View" component={ViewData} />
    </Tab.Navigator>
  );
}

export default BottomNavigator;
