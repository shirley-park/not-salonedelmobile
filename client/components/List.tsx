import { useAppSelector } from '../hooks/redux'
import FurnitureModel from '../models/Furnituremodel'

import ListItem from './ListItem'

function List() {
  const currFurnDb = useAppSelector(
    (state) => state.currentListState as FurnitureModel[]
  )
  return (
    <>
      <section className="cardFlexContainer">
        {currFurnDb.map((furnObj) => (
          <ListItem key={furnObj.id} furnObj={furnObj} />
        ))}
      </section>
    </>
  )
}

export default List
