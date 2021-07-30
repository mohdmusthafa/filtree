import { SET_AUTHENTICATED, SET_ENTRIES } from './types';

const initialState = {
    isAuthenticated: false,
    entries: new Array(8).fill().map((item, index) => ({ id: index, number: 10, times: 5 }))
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case SET_AUTHENTICATED:
            return {...state, isAuthenticated: action.payload }
        case SET_ENTRIES:
            return { ...state, entries: action.payload }
        default:
            return state
    }
}