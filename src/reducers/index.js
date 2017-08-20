import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'

import tasks from './reducer-tasks';

const rootReducer = combineReducers({
  tasks:tasks,  // tasks imported from actions
  form: formReducer  // form data from components
});

export default rootReducer;