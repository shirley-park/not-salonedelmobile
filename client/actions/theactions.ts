import type { ThunkAction } from '../store'

// import the function from furnListApi
import {
  fetchFurnListApi,
  addFurnItemApi,
  deleteItemApi,
  updateItemApi,
} from '../apis/furnListApi'

// import the furn model from
import FurnitureModel from '../models/Furnituremodel'

// export const REQUEST_ITEMS = 'REQUEST_ITEMS'
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS'
export const ADD_ITEM = 'ADD_ITEM'
export const SUBMIT_FORM = 'SUBMIT_FORM'
export const DEL_ITEM = 'DEL_ITEM'
export const UPDATE_ITEM = 'UPDATE_ITEM'

export type Action =
  | { type: 'RECEIVE_ITEMS'; payload: FurnitureModel[] }
  // | { type: 'SUBMIT_FORM'; payload: boolean }
  | { type: 'ADD_ITEM'; payload: FurnitureModel }
  | { type: 'DEL_ITEM'; payload: number }
  | {
      type: 'UPDATE_ITEM'
      payload: FurnitureModel
    }

// -----------SIMPLE ACTIONS-----------//

// RECEIVE ITEMS
function receiveAllItems(dbData: FurnitureModel[]): Action {
  return {
    type: 'RECEIVE_ITEMS',
    payload: dbData,
  }
}

// SUBMIT ADD FORM
// function addFormSubmit(): Action {
//   return {
//     type: 'SUBMIT_FORM',
//     payload: true,
//   }
// }

// ADD ITEM
function addNewItem(newItem: FurnitureModel): Action {
  return {
    type: 'ADD_ITEM',
    payload: newItem,
  }
}

// DELETE ITEM
function deleteItem(id: FurnitureModel['id']): Action {
  return {
    type: 'DEL_ITEM',
    payload: id,
  }
}

// UPDATE ITEM
export function updateItem(updatedItem: FurnitureModel) {
  return {
    type: 'UPDATE_ITEM',
    payload: updatedItem,
  }
}

// -----------THUNKS-----------//

// FETCH ALL Thunk
export function fetchAllThunk(): ThunkAction {
  return (dispatch) => {
    // fetchFurnList from API
    return fetchFurnListApi()
      .then((data) => {
        console.log(data)
        dispatch(receiveAllItems(data))
      })
      .catch((err) => {
        err.message
      })
  }
}

// ADD Item Thunk
export function addNewItemThunk(formInput: FurnitureModel): ThunkAction {
  return (dispatch) => {
    // NOT NEEDED
    // dispatch(addFormSubmit())
    // addItem API function
    return (
      addFurnItemApi(formInput)
        // then dispatch the added item to the reducer
        .then((newItem) => {
          dispatch(addNewItem(newItem))
        })
        .catch((err) => {
          err.message
        })
    )
  }
}

// DELETE Item Thunk
export function deleteItemThunk(id: FurnitureModel['id']): ThunkAction {
  return (dispatch) => {
    return (
      // deleteItem Api
      deleteItemApi(id)
        // dispatch the delete action
        .then(() => {
          dispatch(deleteItem(id))
        })
        .catch((err) => {
          err.message
        })
    )
  }
}

// UPDATE Item Thunk
export function updateItemThunk(
  id: number,
  updatedItem: FurnitureModel
): ThunkAction {
  return (dispatch) => {
    console.log(updatedItem)
    // dispatch the updateItem action
    dispatch(updateItem(updatedItem))

    // updateItem Api function
    return updateItemApi(id, updatedItem)
      .then(() => {
        dispatch(fetchAllThunk())
      })
      .catch((err: Error) => {
        err.message
      })
  }
}
