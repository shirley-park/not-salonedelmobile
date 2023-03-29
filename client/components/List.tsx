import { fetchFurnList } from '../apis/furnListApi'

import { useState } from 'react'
import { useAppSelector } from '../hooks/redux'

import FurnitureModel from '../models/Furnmodel'

function List() {
  const [theList, setList] = useState({
    id: 1,
    item: 'Offset stool',
    designer: 'philippe malouin',
    imageURL:
      'https://resident.co.nz/media/uploads/2022_03/offset_table-1_0002_20180426_Thomas_Seear-Budd_Simon_James_1.jpg.1440x1152_q85_upscale.jpg',
  })

  const listState = useAppSelector((state) => state.furnReducer)

  return (
    <>
      <section className="list-grid">
        <h2>Salone del Mobile</h2>

        <div>
          {/* <div className="furnCard">
            <h2>Offset stool</h2>
            <h3>philippe malouin</h3>
            <img
              src="https://resident.co.nz/media/uploads/2022_03/offset_table-1_0002_20180426_Thomas_Seear-Budd_Simon_James_1.jpg.1440x1152_q85_upscale.jpg"
              alt="Offset stool"
            />
          </div> */}
          {listState.map((item) => {
            return (
              <div key={item.id} className="furnCard">
                <h2 className="furnName">{item.name}</h2>
                <h3>{item.designer}</h3>
                <img src={item.imageURL} alt={item.item} />
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default List
