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
      console.log('redwdw',action.response)
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
    default:
      return state
  }
}