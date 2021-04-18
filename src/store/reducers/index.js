import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

import userDetailsReducer from './userDetails'

const persistConfig = {
  key: 'soalRoot',
  storage,
  stateReconciler: autoMergeLevel2,
  blacklist: [],
}

const rootReducer = combineReducers({
  userDetails: userDetailsReducer,
})

export default persistReducer(persistConfig, rootReducer)
