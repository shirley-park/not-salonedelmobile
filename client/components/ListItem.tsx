import FurnitureModel from '../models/Furnituremodel'
import { deleteItemThunk, fetchAllThunk } from '../actions/theactions'

import { useAppDispatch } from '../hooks/redux'
// import { useState } from 'react'

// delete button style
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
// edit icon
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import { Icon } from '@mui/material'

function ListItem({ furnObj }: { furnObj: FurnitureModel }) {
  // console.log(furnObj)

  const dispatch = useAppDispatch()

  // const [item, setListItem] = useState(furnObj)

  // const handleEdit = async (id: number) => {
  //   await dispatch(editItemThunk())
  // }

  const handleDelete = async (id: number) => {
    await dispatch(deleteItemThunk(id))
    // dispatch(fetchAllThunk())
    // setListItem({ id: 0, name: '', designer: '', imageURL: '' })
  }

  return (
    <div className="furnCard">
      <div className="h1DeleteBlock">
        <h2 className="furnName">{furnObj.name}</h2>
        <div className="editDeleteIcons">
          <IconButton
            aria-label="edit"
            size="large"
            className="editButton"
            // onClick={() => {
            //   handleEdit(furnObj.id)
            // }}
          >
            <EditOutlinedIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            aria-label="delete"
            size="large"
            className="deleteButton"
            onClick={() => {
              handleDelete(furnObj.id)
            }}
          >
            <DeleteIcon fontSize="inherit" />
          </IconButton>
        </div>
      </div>

      <h3>{furnObj.designer}</h3>

      <img src={furnObj.imageURL} alt={furnObj.name} />
    </div>
  )
}

export default ListItem
