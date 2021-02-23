import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import artistReducer from './reducers/artistReducer'
import userReducer from './reducers/userReducer'
import playlistReducers from './reducers/playlistReducer'

const reducers = combineReducers({
  userReducer,
  playlistReducers,
  artistReducer
})
const store = createStore(reducers, applyMiddleware(thunk))

export default store