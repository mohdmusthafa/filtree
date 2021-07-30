import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigator from './navigation/BottomNavigator';
import Login from './screens/login';
import { useSelector } from 'react-redux';

function App() {
  const isAuthenticated = useSelector(state => state.isAuthenticated);
  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <BottomNavigator />
      ) : (
        <Login />
      )
    }
    </NavigationContainer>
  )
}

export default App;