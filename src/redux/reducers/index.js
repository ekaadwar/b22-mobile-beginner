import { combineReducers } from 'redux'
import { profileReducer } from './profile'
import { globalReducer } from './global'
import cart from './cart'
import items from './items'
import history from './history'

const rootReducer = combineReducers({
  cart,
  items,
  profileReducer,
  globalReducer,
  history,
})

export default rootReducer
