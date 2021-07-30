import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigator from './navigation/BottomNavigator';

function App() {

  const [isAuthenticated, setIsAuthenticated] = React.useState(true)
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