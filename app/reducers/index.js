/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux';
// import loggingMiddleware from 'redux-logger';
// import thunkMiddleware from 'redux-thunk'
//all reducers imported below
import campuses from './campuses';
import students from './students';


const reducer = combineReducers({ campuses, students });


export default reducer;

export * from './campuses';
export * from './students';
