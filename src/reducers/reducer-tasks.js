import _ from 'lodash';

export default function(state={},action){
  switch (action.type){
    
    /** Fetch all tasks */
    case "fetchAll":
      return _.mapKeys(action.payload.data,"_id");
  
    /** Delete a single task*/
    case "deleteOne":
      const _id= action.payload.data._id;
      return _.omit(state,_id); //delete from store

    /** Update a single task */
    case "updateOne":
      const id= (action.payload.data._id);
      // add to the store
      return {...state,[id]:action.payload.data}

    default:
      return state;
  }
}