import { useAppSelector, useAppDispatch } from '../hooks/redux'
import FurnitureModel from '../models/Furnituremodel'

import ListItem from './ListItem'

import { useEffect } from 'react'
import { fetchAllThunk } from '../actions/theactions'

function List() {
  const currFurnDb = useAppSelector(
    (state) => state.currentListState as FurnitureModel[]
  )

  // const dispatch = useAppDispatch()

  // useEffect(() => {
  //   dispatch(fetchAllThunk())
  // }, [dispatch])

  console.log(currFurnDb)
  return (
    <>
      <section className="cardContainer">
        {currFurnDb.map((furnObj) => (
          <ListItem key={furnObj.id} furnObj={furnObj} />
        ))}
      </section>
    </>
  )
}

export default List
