/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers, createStore, applyMiddleware } from 'redux';
import loggingMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
//all reducers imported below
import campuses from './campuses';


const reducer = combineReducers({ campuses })

const store = createStore(reducer)

export default store

export * from './campuses'
