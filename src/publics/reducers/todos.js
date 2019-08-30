import * as actions from '../actions/ActionTypes'

const initialState = {
  data: [],
  isLoading: false,
  isFound: false
}

export default Todos = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case actions.GET_TODOS_SUCCESS:
      return {
        ...state,
        data: action.response,
        isLoading: false,
        isFound: true
      }
    case actions.GET_TODOS_ERROR:
      return {
        ...state,
        isLoading: false,
        isFound: false
      }

    case actions.POST_TODOS:
      return {
        ...state,
        isLoading: true
      }
    case actions.POST_TODOS_SUCCESS:
      return {
        ...state,
        data: [action.response, ...state.data],
        isLoading: false,
      }
    case actions.POST_TODOS_ERROR:
      return {
        ...state,
        isLoading: false,
      }
    
    case actions.DELETE_TODOS:
      return {
        ...state,
        isLoading: true
      }
    case actions.DELETE_TODOS_SUCCESS:
      return {
        ...state,
        data: state.data.filter(item => item.key !== action.response),
        isLoading: false,
      }
    case actions.DELETE_TODOS_ERROR:
      return {
        ...state,
        isLoading: false,
      }

    default:
      return state
  }
}