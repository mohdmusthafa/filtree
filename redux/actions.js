import { SET_ENTRIES, SET_SUMMARY } from './types';

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

export const filterData = (filter) => async (dispatch, getState) => {
    try {
        //api call
        const { entries } = getState();
        let response = JSON.parse(JSON.stringify(entries));
        response.splice(4, 1)
        response.splice(2, 1)

        dispatch({
            type: SET_ENTRIES,
            payload: response
        })
        
        dispatch({
            type: SET_SUMMARY,
            payload: {
                in_value: 73,
                out_value: 23,
                in_amount: 17000,
                out_amount: 34000
            }
        })


    } catch (err) {
        console.log(err)
    }
}
