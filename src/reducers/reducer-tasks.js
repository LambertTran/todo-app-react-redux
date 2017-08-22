import _ from 'lodash';

// import {fetchAllTasks} from '../actions';
// import {fetchTask} from '../actions';

export default function(state={},action){
  switch (action.type){
    case "fetchAll":
      return _.mapKeys(action.payload.data,"_id");

    // case "addTask":
    //   console.log(action.payload);
    //   return {...state,[action.payload.data._id]:action.payload.data}

    case "deleteOne":
      const _id= action.payload.data._id;
      return _.omit(state,_id);

    default:
      return state;
  }
}