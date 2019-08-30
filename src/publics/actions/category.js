import * as ActionTypes from './ActionTypes'

export const getCategoryItem = () => ({
  type: ActionTypes.GET_CATEGORY_REQUEST,
})

export const getCategoryItemSuccess = data => ({
  type: ActionTypes.GET_CATEGORY_SUCCESS,
  data,
})

export const getCategoryItemError = error => ({
  type: ActionTypes.GET_CATEGORY_ERROR,
  error,
})