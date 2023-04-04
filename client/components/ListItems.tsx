import { useAppSelector, useAppDispatch } from '../hooks/redux'
import FurnitureModel from '../models/Furnituremodel'
import { useEffect, FormEvent } from 'react'
import { fetchAllThunk, deleteItemThunk } from '../actions/theactions'

// delete button style
// import * as React from 'react'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'

function ListItems() {
  const currFurnDb: FurnitureModel[] = useAppSelector(
    (state) => state.currentListState
  )

  const dispatch = useAppDispatch()

  const handleDelete = async (id: number, e: FormEvent) => {
    {
      e.preventDefault()
      dispatch(deleteItemThunk(id))
      // const updatedList = await fetchFurnListApi()
      // setListState(updatedList)
    }
  }
  useEffect(() => {
    dispatch(fetchAllThunk())
  }, [dispatch])

  return (
    <>
      <section className="cardFlexContainer">
        {currFurnDb.map((item: FurnitureModel, i) => {
          return (
            <div key={i} className="furnCard">
              <div className="h1DeleteBlock">
                <h2 className="furnName">{item.name}</h2>

                <Stack direction="row" alignItems="center" spacing={1}>
                  <IconButton
                    aria-label="delete"
                    size="large"
                    className="deleteButton"
                    onClick={(e) => {
                      handleDelete(item.id, e)
                    }}
                  >
                    <DeleteIcon fontSize="inherit" />
                  </IconButton>
                </Stack>
              </div>

              <h3>{item.designer}</h3>
              {/* <button className="deleteButton">x</button> */}

              <img src={item.imageURL} alt={item.name} />
            </div>
          )
        })}
      </section>
    </>
  )
}

export default ListItems
