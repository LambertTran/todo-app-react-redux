import axios from 'axios';

const ROOT_URL = "https://server-todo-app.herokuapp.com/api";
// const ROOT_URL = "http://localhost:8080/api";


export function fetchAllTasks(){
  const req = axios.get(`${ROOT_URL}/tasks`,{header:'x-auth'});
  return{
    type:"fetchAll",
    payload:req
  }
}

export function fetchTask(id){
  const req = axios.get(`${ROOT_URL}/tasks&id=${id}`,{header:'x-auth'});
  return{
    type:"fetchOne",
    payload:req
  }
}

export function createTask(value,callback){

  const req = axios.post(`${ROOT_URL}/tasks`,value,{header:'x-auth'})
    .then(() => callback());
  return{
    type:"postNew",
    payload:req
  }
}


export function newUser(value,callback){
  const req = axios.post(`${ROOT_URL}/users`,value)
    .then(() => callback());
  return{
    type:"NEW_USER",
    payload:req
  }
}


export function userLogin(value,callback){
  const req = axios.post(`${ROOT_URL}/users/login`,value)
    .then((res) => {

      //set global header
      axios.defaults.headers.common['x-auth'] = res.headers['x-auth'];
      callback()
    });
  
  return{
    type:"NEW_USER",
    payload:req
  }
}

