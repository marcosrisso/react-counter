import React from 'react';
import loggedReducer from './isLogged';
import counterReducer from './counter';
import { combineReducers } from 'redux';


const collectedReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
})




export default collectedReducers;