// import FurnitureModel from '../models/Furnituremodel'
import { useAppDispatch } from '../hooks/redux'
import { addNewItemThunk } from '../actions/theactions'
import { ChangeEvent, FormEvent, useState } from 'react'
import FurnitureModel from '../models/Furnituremodel'

function AddItemForm() {
  const dispatch = useAppDispatch()

  const [formDeets, setFormDeets] = useState({
    // id: 1,
    // name: '',
    // designer: '',
    // imageURL: '',
  } as FurnitureModel)

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormDeets({
      ...formDeets,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    dispatch(addNewItemThunk(formDeets))
  }

  return (
    <>
      {/* <button>Add new item</button> */}
      <div className="addFormContainer">
        <form onSubmit={handleSubmit}>
          <label>
            Item name:
            <input
              onChange={changeHandler}
              type="text"
              // name="itemName"
              id="name"
              value={formDeets.name || ''}
            />
          </label>
          <label>
            Designer:
            <input
              onChange={changeHandler}
              type="text"
              // name="designer"
              id="designer"
              value={formDeets.designer || ''}
            />
          </label>
          <label>
            imageURL:
            <input
              onChange={changeHandler}
              type="text"
              // name="imageURL"
              id="imageURL"
              value={formDeets.imageURL || ''}
            />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    </>
  )
}
export default AddItemForm
