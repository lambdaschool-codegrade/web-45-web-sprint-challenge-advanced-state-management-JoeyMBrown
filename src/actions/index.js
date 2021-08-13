import axios from 'axios';
export const START_SMURF_FETCH = 'START_SMURF_FETCH';
export const SMURF_FETCH_SUCCESS = 'SMURF_FETCH_SUCCESS';
export const SMURF_FETCH_FAIL = 'SMURF_FETCH_FAIL';
export const ADD_SMURF = 'ADD_SMURF';
export const ADD_ERROR = 'ADD_ERROR';
//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
export const fetchSmurf = () => dispatch => {
    dispatch({type: START_SMURF_FETCH});
    axios.get('http://localhost:3333/smurfs')
        .then((res) => {
            dispatch({type: SMURF_FETCH_SUCCESS, payload: res.data})
        })
        .catch((err) => {
            dispatch({type: SMURF_FETCH_FAIL, payload: err})
        })
}
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
export const addSmurf = (smurf) => {
    return {
        type: ADD_SMURF,
        payload: smurf
    }
}
//3. Add a standard action that allows us to set the value of the error message slice of state.
export const addError = (err) => {
    return {
        type: ADD_ERROR,
        payload: err
    }
}