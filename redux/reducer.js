import {SET_AUTHENTICATED, SET_ENTRIES, SET_SUMMARY,SET_AUTH_ERROR, SET_APP_LOADING} from './types';

const initialState = {
  isAuthenticated: false,
  appLoading: true,
  authError: null,
  entries: [],
  summary: {
    in_value: 0,
    out_value: 0,
    in_amount: 0,
    out_amount: 0,
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {...state, isAuthenticated: action.payload};
    case SET_ENTRIES:
      return {...state, entries: action.payload};
    case SET_SUMMARY:
      return {...state, summary: action.payload};
    case SET_AUTH_ERROR:
      return {...state, authError: action.payload};
    case SET_APP_LOADING:
      return {...state, appLoading: action.payload};
    default:
      return state;
  }
}
