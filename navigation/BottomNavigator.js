import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Insert from '../screens/insert';
import ViewData from '../screens/view_data';

const Tab = createBottomTabNavigator();

function BottomNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Insert" component={Insert} />
            <Tab.Screen name="View" component={ViewData} />
        </Tab.Navigator>
    )
}

export default BottomNavigator;