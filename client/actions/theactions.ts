import type { ThunkAction } from '../store'

// import the function from furnListApi
import { fetchFurnList } from '../apis/furnListApi'

// import the furn model from
import FurnitureModel from '../models/Furnmodel'

export type Action =
  | { type: 'REQUEST_ITEMS'; payload: null }
  | { type: 'RECEIVE_ITEMS'; payload: FurnitureModel[] }
// | { type: 'ADD_ITEMS'; payload: { name: string; designer: string; image: string }
// | { type: 'DEL_ITEMS'; payload: number }

// add actions

export function requestAllItems(): Action {
  return {
    type: 'REQUEST_ITEMS',
    payload: null,
  }
}

// ------- START HERE GOING FORWARD ------- //

export function receiveAllItems(): Action {
  return {
    type: 'RECEIVE_ITEMS',
    payload: fullList.map((item) => item),
  }
}

// add Thunk function
