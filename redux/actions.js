import { SET_ENTRIES } from './types';

export const addEntry = (number, times) => async (dispatch, getState) => {
    try {
        //api call
        const { entries } = getState();
        let response = JSON.parse(JSON.stringify(entries));
        response.unshift({
            id: response.length+1,
            number: number,
            times: times
        })
        dispatch({
            type: SET_ENTRIES,
            payload: response
        })
    } catch (err) {
        console.log(err)
    }
}