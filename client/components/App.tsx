import FetchList from './FetchList'
import AddItemForm from './AddItemForm'

function App() {
  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <div className="main">
        <AddItemForm />
        <FetchList />
      </div>
    </>
  )
}

export default App
