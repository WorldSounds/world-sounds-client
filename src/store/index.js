import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import artistReducer from './reducers/artistReducer'
import userReducer from './reducers/userReducer'
import playlistReducers from './reducers/playlistReducer'
import songsReducer from './reducers/songsReducer'

const reducers = combineReducers({
  userReducer,
  playlistReducers,
  artistReducer,
  songsReducer
})
const store = createStore(reducers, applyMiddleware(thunk))


export default store