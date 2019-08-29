import * as ActionTypes from './ActionTypes'

export const getTodosItem = () => ({
  type: ActionTypes.GET_TODOS_REQUEST,
})

export const getTodosItemSuccess = data => ({
  type: ActionTypes.GET_TODOS_SUCCESS,
  data,
})

export const getTodosItemError = error => ({
  type: ActionTypes.GET_TODOS_ERROR,
  error,
})