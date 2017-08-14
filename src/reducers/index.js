import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'

import tasks from './reducer-tasks';

const rootReducer = combineReducers({
  tasks:tasks,
  form: formReducer
});

export default rootReducer;