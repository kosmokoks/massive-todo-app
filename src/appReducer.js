import { combineReducers } from 'redux';
import listReducer from "./page/list/reducer";
import errorReducer from './page/error/reducer';

const reducers = {
    list: listReducer,
    error: errorReducer,
};

export default combineReducers(reducers);
