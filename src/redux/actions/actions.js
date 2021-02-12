import {ADD_TODO, CHECK_TODO, DELETE_TODO} from './actionTypes';


export function add_todo(title) {
  return {
    type: ADD_TODO,
    payload: title
  }
}

export function delete_todo(id) {
  return {
    type: DELETE_TODO,
    payload: id
  }
}

export function check_todo(id) {
  return {
    type: CHECK_TODO,
    payload: id
  }
}