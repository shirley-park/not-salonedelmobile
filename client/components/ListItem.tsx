import FurnitureModel from '../models/Furnituremodel'
import { deleteItemThunk, fetchAllThunk } from '../actions/theactions'

import { useAppDispatch } from '../hooks/redux'
// import { useState } from 'react'

// delete button style
// import * as React from 'react'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'

function ListItem({ furnObj }: { furnObj: FurnitureModel }) {
  console.log(furnObj)

  const dispatch = useAppDispatch()

  // const [item, setListItem] = useState(furnObj)

  const handleDelete = async (id: number) => {
    await dispatch(deleteItemThunk(id))
    dispatch(fetchAllThunk())
    // setListItem({ id: 0, name: '', designer: '', imageURL: '' })
  }

  return (
    <div className="furnCard">
      <div className="h1DeleteBlock">
        <h2 className="furnName">{furnObj.name}</h2>
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          onClick={() => {
            handleDelete(furnObj.id)
          }}
        >
          <IconButton aria-label="delete" size="large" className="deleteButton">
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </Stack>
      </div>

      <h3>{furnObj.designer}</h3>

      <img src={furnObj.imageURL} alt={furnObj.name} />
    </div>
  )
}

export default ListItem
