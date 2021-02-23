import { createStore, combineReducers, applyMiddleware } from 'redux'
import songsReducer from './reducers/songsReducer'
import thunk from 'redux-thunk'

// const rootReducer = combineReducers({
//   songs: songsReducer,
//   favorites: favoritesReducer
// })

const store = createStore(songsReducer, applyMiddleware(thunk))

export default store