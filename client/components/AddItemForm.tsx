// import FurnitureModel from '../models/Furnituremodel'
import { useAppDispatch } from '../hooks/redux'
import { addNewItemThunk } from '../actions/theactions'
import { ChangeEvent, FormEvent, useState } from 'react'
import FurnitureModel from '../models/Furnituremodel'

// import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

function AddItemForm() {
  const dispatch = useAppDispatch()

  const [formDeets, setFormDeets] = useState({
    // id: 0,
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
    console.log(formDeets)
    e.preventDefault()
    return dispatch(addNewItemThunk(formDeets))
  }

  return (
    <>
      <div className="addFormContainer">
        {/* <form onSubmit={handleSubmit}> */}
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            onChange={changeHandler}
            // id="filled-basic"
            label="Item name"
            id="name"
            value={formDeets.name || ''}
            variant="filled"
            className="textField"
            required
          />
          <TextField
            onChange={changeHandler}
            // id="filled-basic"
            label="Designer"
            id="designer"
            value={formDeets.designer || ''}
            variant="filled"
            className="textField"
            required
          />
          <TextField
            onChange={changeHandler}
            // id="filled-basic"
            label="Image URL"
            id="imageURL"
            value={formDeets.imageURL || ''}
            variant="filled"
            className="textField"
            required
          />
          <button type="submit" className="addButton">
            Add
          </button>
        </Box>
      </div>
    </>
  )
}
export default AddItemForm
