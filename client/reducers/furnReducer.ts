import {
  Action,
  RECEIVE_ITEMS,
  ADD_ITEM,
  DEL_ITEM,
} from '../actions/theactions'
import FurnitureModel from '../models/Furnituremodel'

const initialState = [] as FurnitureModel[]

function furnReducer(
  state = initialState,
  action: Action
): FurnitureModel[] | null {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_ITEMS:
      return payload
    case ADD_ITEM:
      return state.concat(payload)
    case DEL_ITEM:
      return state.filter((item) => {
        item.id !== payload
      })
    default:
      return state
  }
}

export default furnReducer
