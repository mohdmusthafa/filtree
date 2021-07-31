import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomNavigator from './navigation/BottomNavigator';
import Login from './screens/login';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Splash from './screens/splash';
import {checkAuthenticated} from './redux/actions';

axios.defaults.baseURL = 'http://21.21.21.193:3000/api';

axios.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('accessToken');
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
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.isAuthenticated);
  const appLoading = useSelector(state => state.appLoading);
  useEffect(() => {
    dispatch(checkAuthenticated());
  }, [])

  if (appLoading) {
    return <Splash />
  }
  return (
    <NavigationContainer>
      {isAuthenticated ? <BottomNavigator /> : <Login />}
    </NavigationContainer>
  );
}

export default App;
