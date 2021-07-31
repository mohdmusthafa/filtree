import { SET_ENTRIES, SET_SUMMARY, SET_AUTHENTICATED, SET_AUTH_ERROR } from './types';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const login = (username, password) => async dispatch => {
  try {
    const response = await axios.post('/login', { username, password });
    if (response.data.accessToken) {
      await AsyncStorage.setItem('accessToken', response.data.accessToken)
    }

    dispatch({
      type: SET_AUTH_ERROR,
      payload: null
    })

    dispatch({
      type: SET_AUTHENTICATED,
      payload: true,
    })
  } catch (err) {
    console.log(err);
    dispatch({
      type: SET_AUTH_ERROR,
      payload: "Username or Password Incorrect"
    })
  }
};

export const hideAuthError = () => dispatch => {
  dispatch({
    type: SET_AUTH_ERROR,
    payload: null
  })
}

export const addEntry = (number, times) => async (dispatch, getState) => {
  try {
    //api call
    const { entries } = getState();
    let response = JSON.parse(JSON.stringify(entries));
    response.unshift({
      id: response.length + 1,
      number: number,
      times: times,
    });
    dispatch({
      type: SET_ENTRIES,
      payload: response,
    });
  } catch (err) {
    console.log(err);
  }
};

export const filterData = filter => async (dispatch, getState) => {
  try {
    //api call
    const { entries } = getState();
    let response = JSON.parse(JSON.stringify(entries));
    response.splice(4, 1);
    response.splice(2, 1);

    dispatch({
      type: SET_ENTRIES,
      payload: response,
    });

    dispatch({
      type: SET_SUMMARY,
      payload: {
        in_value: 73,
        out_value: 23,
        in_amount: 17000,
        out_amount: 34000,
      },
    });
  } catch (err) {
    console.log(err);
  }
};
