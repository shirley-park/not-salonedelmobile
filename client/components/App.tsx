import { useEffect } from 'react'
import { useAppDispatch } from '../hooks/redux'

import AddItemForm from './AddItemForm'
import List from './List'
import { fetchAllThunk } from '../actions/theactions'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchAllThunk())
  }, [dispatch])

  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <div className="main">
        <AddItemForm />
        <List />
      </div>
    </>
  )
}

export default App
