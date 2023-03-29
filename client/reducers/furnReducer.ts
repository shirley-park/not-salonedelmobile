import {
  Action,
  // RECEIVE_ITEMS,
  // REQUEST_ITEMS,
  // ADD_ITEM, DEL_ITEM, UPDATE_ITEM
} from '../actions/theactions'

const initialState = [
  {
    id: 1,
    name: 'Offset stool',
    designer: 'Philippe Malouin',
    imageURL:
      'https://resident.co.nz/media/uploads/2022_03/offset_table-1_0002_20180426_Thomas_Seear-Budd_Simon_James_1.jpg.1440x1152_q85_upscale.jpg',
  },
]

function furnReducer(state = initialState, action: Action) {
  const { type, payload } = action

  switch (type) {
    // case REQUEST_ITEMS:
    //   return payload
    // case RECEIVE_ITEMS:
    //   return payload
    // case ADD_ITEMS:
    //   return [...state, payload]
    // case DEL_ITEMS:
    //   return state.filter((item) => {
    //     item.id !== payload
    //   })
    default:
      return state
  }
}

export default furnReducer
