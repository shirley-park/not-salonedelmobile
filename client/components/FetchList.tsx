import { useAppDispatch } from '../hooks/redux'

// import ListItems from './ListItems'
import { useEffect } from 'react'

import { fetchAllThunk } from '../actions/theactions'
import ListItems from './ListItems'

// import FurnitureModel from '../models/Furnituremodel'

function FetchList() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAllThunk())
  }, [dispatch])

  return (
    <>
      <ListItems />
    </>
  )
}

export default FetchList
