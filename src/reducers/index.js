import {combineReducers} from 'redux';
import tasks from './reducer-tasks';

const rootReducer = combineReducers({
  tasks:tasks
});

export default rootReducer;