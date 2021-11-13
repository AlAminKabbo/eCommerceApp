import  { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    counter: counterReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});