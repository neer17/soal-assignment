import { combineReducers } from 'redux'

import userDetailsReducer from './userDetails'

const rootReducer = combineReducers({
  userDetails: userDetailsReducer,
})

export default rootReducer
