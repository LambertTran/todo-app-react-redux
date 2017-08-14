import _ from 'lodash';

import {fetchAllTasks} from '../actions';
import {fetchTask} from '../actions';

export default function(state=[],action){
  switch (action.type){
    case "fetchAll":
      return _.mapKeys(action.payload.data,"_id");

    // case "fetchOne":
    //   const id = action.payload.data._id;
    //   const data= action.payload.data;
    //   return {...state,[action.payload.data._id]:action.payload.data};


    default:
      return state;
  }
}