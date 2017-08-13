import axios from 'axios';

const ROOT_URL = "https://server-todo-app.herokuapp.com/api";

const FETCH_TASKS = 'fetch_tasks';

export function fetchAllTasks(){
  const req = axios.get(`${ROOT_URL}/tasks`);
  return{
    type:"fetchAll",
    payload:req
  }
}

export function fetchTask(id){
  const req = axios.get(`${ROOT_URL}/tasks&id=${id}`);
  return{
    type:"fetchOne",
    payload:req
  }
}