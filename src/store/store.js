import { createStore, compose } from 'redux'
import { persistStore } from 'redux-persist'

import persistReducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(persistReducer, composeEnhancers())

export const persistor = persistStore(store)
export default store
