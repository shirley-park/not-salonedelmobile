import FurnitureModel from '../models/Furnituremodel'
import { deleteItemThunk, updateItemThunk } from '../actions/theactions'

import { useAppDispatch } from '../hooks/redux'
import { ChangeEvent, FormEvent, useState, useEffect } from 'react'

// delete button style
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
// edit icon
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import { Icon } from '@mui/material'

function ListItem({ furnObj }: { furnObj: FurnitureModel }) {
  // console.log(furnObj)

  const dispatch = useAppDispatch()

  const [formVisible, toggleVisibility] = useState(false)

  const toggleVisible = () => {
    toggleVisibility(!formVisible)
    console.log(formVisible)
  }

  const [formDeets, setFormDeets] = useState({} as FurnitureModel)

  useEffect(() => {}, [formDeets])

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setFormDeets({
      ...formDeets,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmitEdit = (e: FormEvent) => {
    e.preventDefault()
    console.log('1.' + formDeets)
    dispatch(updateItemThunk(furnObj.id, formDeets))
      .then(() => {
        toggleVisibility(!formVisible)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  const handleDelete = async (id: number) => {
    await dispatch(deleteItemThunk(id))
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
            onClick={toggleVisible}
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
      {formVisible && (
        <div>
          <form onSubmit={handleSubmitEdit} className="editForm">
            Edit item
            <label htmlFor="name" className="editLabel">
              Name
            </label>
            <input
              id="name"
              value={formDeets.name || ''}
              type="text"
              className="editInput"
              placeholder={furnObj.name}
              onChange={changeHandler}
            />
            <label htmlFor="designer" className="editLabel">
              Designer
            </label>
            <input
              id="designer"
              value={formDeets.designer || ''}
              type="text"
              className="editInput"
              placeholder={furnObj.designer}
              onChange={changeHandler}
            />
            <label htmlFor="imageURL" className="editLabel">
              Image Url
            </label>
            <input
              id="imageURL"
              value={formDeets.imageURL || ''}
              type="text"
              className="editInput"
              placeholder={furnObj.imageURL}
              onChange={changeHandler}
            />
            <br />
            <button type="submit">Update</button>
          </form>
        </div>
      )}

      <img src={furnObj.imageURL} alt={furnObj.name} />
    </div>
  )
}

export default ListItem
