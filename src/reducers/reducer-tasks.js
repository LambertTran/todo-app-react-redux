import _ from 'lodash';

import {fetchAllTasks} from '../actions';

export default function(state=[],action){
  switch (action.type){
    case "fetchAll":
      return action.payload.data;
    default:
      return state;
  }
}