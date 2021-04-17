import * as types from '../types'

const initialState = {
  isLoading: false,
  userDetails: null,
  error: null,
}

const defaultErrorMessage = 'Something went wrong'

export default (state = initialState, action) => {
  switch (action.type) {
    // Login Actions
    case types.REQUEST_LOGIN:
      return {
        ...state,
        isLoading: true,
        userDetails: null,
      }
    case types.LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        userDetails: action.payload.result.data,
      }
    }
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.result || defaultErrorMessage,
      }
    default: {
      return state
    }
  }
}
