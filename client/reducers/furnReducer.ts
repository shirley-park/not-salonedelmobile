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
      return state.concat(payload)
    case DEL_ITEM:
      return state.filter((item) => {
        item.id !== payload
      })
    // case UPDATE_ITEM:
    //   return state.map((itemObj: FurnitureModel) => {
    //     if (itemObj.id === currentItem.id) {
    //       itemObj.name = updatedItem.name
    //       itemObj.designer = updatedItem.designer
    //       itemObj.imageURL = updatedItem.imageURL
    //     }
    //   })
    default:
      return state
  }
}

export default furnReducer
