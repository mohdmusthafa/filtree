import { SET_ENTRIES, SET_SUMMARY, SET_AUTHENTICATED, SET_AUTH_ERROR, SET_APP_LOADING } from './types';
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

export const checkAuthenticated = () => async dispatch => {
  try {
    const response = await axios.get('/authenticated');
    if (response.data.username) {
      dispatch({
        type: SET_AUTHENTICATED,
        payload: true
      })
      dispatch({
        type: SET_APP_LOADING,
        payload: false
      })
    }
  } catch (err) {
    dispatch({
      type: SET_AUTHENTICATED,
      payload: false
    })
    dispatch({
      type: SET_APP_LOADING,
      payload: false
    })
    console.log(err)
  }
}

export const hideAuthError = () => dispatch => {
  dispatch({
    type: SET_AUTH_ERROR,
    payload: null
  })
}

export const getEntries = () => async dispatch => {
  try {
    const response = await axios.get('/list');
    dispatch({
      type: SET_ENTRIES,
      payload: response.data
    })

    dispatch({
      type: SET_SUMMARY,
      payload: {
        in_amount: 0,
        out_amount: 0,
        in_value: 0,
        out_value: 0
      }
    })
  } catch (err) {
    console.log(err)
  }
}

export const addEntry = (number, times) => async (dispatch) => {
  try {
    await axios.post('/insert', { number, times });
    dispatch(getEntries());
  } catch (err) {
    console.log(err);
  }
};

export const filterData = (filter, condition) => async (dispatch) => {
  try {
    const response = await axios.post('/filter', { filter: filter, condition });
    const summary = await axios.post('/summary', { filter: filter });
    dispatch({
      type: SET_ENTRIES,
      payload: response.data,
    });

    dispatch({
      type: SET_SUMMARY,
      payload: summary.data,
    });
  } catch (err) {
    console.log(err);
  }
};


export const flushData = () => async dispatch => {
  try {
    await axios.delete('/flush');
    dispatch(getEntries())
    return;
  } catch (err) {
    console.log(err)
  }
}