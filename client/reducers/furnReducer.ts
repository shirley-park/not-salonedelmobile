import {
  Action,
  RECEIVE_ITEMS,
  ADD_ITEM,
  DEL_ITEM,
  UPDATE_ITEM,
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
      // return state.concat(payload)
      console.log(payload)
      return [payload, ...state]
    case DEL_ITEM:
      return state.filter((item) => {
        // *** added return here
        return item.id !== payload
      })
    case UPDATE_ITEM:
      return state.map((itemObj: FurnitureModel) => {
        if (itemObj.id === payload.id) {
          return (
            // itemObj.name = updatedItem.name,
            // itemObj.designer = updatedItem.designer,
            // itemObj.imageURL = updatedItem.imageURL
            (itemObj = payload)
          )
        } else {
          return itemObj
        }
      })
    default:
      return state
  }
}

export default furnReducer
