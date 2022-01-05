import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  CLEAR_TODO_LIST,
  EDIT_TODO,
} from "../types/todoTypes";

export const addTodo = (payload1, payload2) => {
  return {
    type: ADD_TODO,
    payload1: payload1,
    payload2: payload2,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const toggleTodo = (payload) => {
  return {
    type: TOGGLE_TODO,
    payload: payload,
  };
};

export const clearTodoList = () => {
  return {
    type: CLEAR_TODO_LIST,
  };
};
