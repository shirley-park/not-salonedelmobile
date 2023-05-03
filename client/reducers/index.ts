import { combineReducers } from 'redux'

import furnReducer from './furnReducer'

export default combineReducers({
  currentListState: furnReducer,
})
