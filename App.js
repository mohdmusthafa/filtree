import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavigator from './navigation/BottomNavigator';
import Login from './screens/login';
import {useSelector} from 'react-redux';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

axios.defaults.baseURL = 'http://21.21.21.193:3000/api';

axios.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

function App() {
  const isAuthenticated = useSelector(state => state.isAuthenticated);
  return (
    <NavigationContainer>
      {isAuthenticated ? <BottomNavigator /> : <Login />}
    </NavigationContainer>
  );
}

export default App;
