import {SET_AUTHENTICATED, SET_ENTRIES, SET_SUMMARY,SET_AUTH_ERROR} from './types';

const initialState = {
  isAuthenticated: false,
  authError: null,
  entries: new Array(8)
    .fill()
    .map((item, index) => ({id: index, number: 10, times: 5})),
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
    default:
      return state;
  }
}
