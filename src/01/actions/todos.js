import {
  TODO
} from "../constants/todo";

export const addTodo = (todoItem) => {
  return {
    type: TODO.ADD_TODO,
    payload: {
      ...todoItem
    }
  }
}

export const removeTodo = (id) => {
  return {
    type: TODO.REMOVE_TODO,
    payload: {
      id,
    }
  }
}