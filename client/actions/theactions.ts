import type { ThunkAction } from '../store'

// import the function from furnListApi
import {
  fetchFurnListApi,
  addFurnItemApi,
  deleteItemApi,
} from '../apis/furnListApi'

// import the furn model from
import FurnitureModel from '../models/Furnituremodel'

// export const REQUEST_ITEMS = 'REQUEST_ITEMS'
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS'
export const ADD_ITEM = 'ADD_ITEM'
export const SUBMIT_FORM = 'SUBMIT_FORM'
export const DEL_ITEM = 'DEL_ITEM'

export type Action =
  | { type: 'RECEIVE_ITEMS'; payload: FurnitureModel[] }
  | { type: 'SUBMIT_FORM'; payload: boolean }
  | { type: 'ADD_ITEM'; payload: FurnitureModel }
  | { type: 'DEL_ITEM'; payload: number }

// -----------SIMPLE ACTIONS-----------//

// RECEIVE ITEMS
function receiveAllItems(dbData: FurnitureModel[]): Action {
  return {
    type: 'RECEIVE_ITEMS',
    payload: dbData,
  }
}

// SUBMIT ADD FORM
function addFormSubmit(): Action {
  return {
    type: 'SUBMIT_FORM',
    payload: true,
  }
}

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

// ADD NEW ITEM Thunk
export function addNewItemThunk(formInput: FurnitureModel): ThunkAction {
  return (dispatch) => {
    dispatch(addFormSubmit())
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
    dispatch(deleteItem(id))
    return deleteItemApi(id)
      .then(() => {
        fetchAllThunk()
      })
      .catch((err) => {
        err.message
      })
  }
}
