import * as ActionTypes from './ActionTypes'

// GET
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

// ADD
export const addTask = (title, detail, category_id) => {
  console.log(title, detail, category_id)
  return{
    type: ActionTypes.POST_TODOS,
    payload: {
      taskTitle: title,
			detail: detail,
      category: category_id,
    },
  }
}

export const addTaskSuccess = data => {
  return{
    type: ActionTypes.POST_TODOS_SUCCESS,
    data,
  }
}

export const addTaskError = error => {
  return{
    type: ActionTypes.POST_TODOS_ERROR,
    error,
  }
}

// DELETE
export const deleteTask = payloadData => {
  return{
    type: ActionTypes.POST_TODOS,
    key: payloadData
  }
}

export const deleteTaskSuccess = data => {
  return{
    type: ActionTypes.POST_TODOS_SUCCESS,
    data,
  }
}

export const deleteTaskError = error => {
  return{
    type: ActionTypes.POST_TODOS_ERROR,
    error,
  }
}