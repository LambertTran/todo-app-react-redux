import axios from 'axios';

/** api server for todo-app */
const ROOT_URL = "http://ec2-52-52-42-92.us-west-1.compute.amazonaws.com:8080/api/todo-app";
// const ROOT_URL = "http://localhost:8080/api/todo-app"


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
    type:"addTask",
    payload:req
  }
}


/** Delete task */
export function deleteTask(id){
  const req = axios.delete(`${ROOT_URL}/tasks/${id}`,id,{header:'x-auth'});
  return {
    type:"deleteOne",
    payload:req
  }
}


/** Update task */
export function updateTask(id){
  const req = axios.put(`${ROOT_URL}/tasks/${id}`,id,{header:'x-auth'});
  return {
    type:"updateOne",
    payload:req
  }
}


/*===========================================================

                          Users

/*===========================================================*/

export function newUser(value,callback, handleErr){
  var req = axios.post(`${ROOT_URL}/users`,value)
    .then((res) => {
      //set global header = response header returning from server
      axios.defaults.headers.common['x-auth'] = res.headers['x-auth'];
      callback();
    }, (err) => handleErr())

  return{
    type:"NEW_USER",
    payload:req
  }
}


export function userLogin(value,callback,handleErr){
  const req = axios.post(`${ROOT_URL}/users/login`,value)
    .then((res) => {
      //set global header = response header returning from server
      axios.defaults.headers.common['x-auth'] = res.headers['x-auth'];
      callback()
    }, (err) => handleErr());
  return{
    type:"NEW_USER",
    payload:req
  }
}

