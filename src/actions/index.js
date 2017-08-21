import axios from 'axios';

/** api server for todo-app */
const ROOT_URL = "https://server-todo-app.herokuapp.com/api";
// const ROOT_URL = "local://host"


/*===========================================================

                          Tasks

/*===========================================================*/

/** Fetch all tasks from user database */
export function fetchAllTasks(){
  const req = axios.get(`${ROOT_URL}/tasks`,{header:'x-auth'});
  return{
    type:"fetchAll",
    payload:req
  }
}

/** Fetch single task from user database with _id */
export function fetchTask(id){
  const req = axios.get(`${ROOT_URL}/tasks&id=${id}`,{header:'x-auth'});
  return{
    type:"fetchOne",
    payload:req
  }
}


/** Create new task */
export function createTask(value,callback){
  const req = axios.post(`${ROOT_URL}/tasks`,value,{header:'x-auth'})
    .then(() => callback());
  return{
    type:"postNew",
    payload:req
  }
}



/*===========================================================

                          Users

/*===========================================================*/

export function newUser(value,callback){
  const req = axios.post(`${ROOT_URL}/users`,value)
    .then((res) => {
      //set global header = response header returning from server
      axios.defaults.headers.common['x-auth'] = res.headers['x-auth'];
      callback();
    })
  return{
    type:"NEW_USER",
    payload:req
  }
}


export function userLogin(value,callback){
  const req = axios.post(`${ROOT_URL}/users/login`,value)
    .then((res) => {
      //set global header = response header returning from server
      axios.defaults.headers.common['x-auth'] = res.headers['x-auth'];
      callback()
    });
  return{
    type:"NEW_USER",
    payload:req
  }
}

