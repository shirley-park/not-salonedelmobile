import config from './knexfile'
import knex from 'knex'
import FurnitureModel from '../../client/models/Furnituremodel'

type Environment = 'production' | 'test' | 'development'
const environment = (process.env.NODE_ENV as Environment) || 'development'
const connection = knex(config[environment])

export function getAllItems(db = connection): Promise<FurnitureModel[]> {
  return db('furniture').select().orderBy('id', 'desc')
}

export function addNewItem(
  newItem: FurnitureModel,
  db = connection
): Promise<FurnitureModel> {
  return (
    db('furniture')
      .insert(newItem)
      // *** forgot to add 'id' to the .returning statement
      .returning(['id', 'name', 'designer', 'imageURL'])
      .then((theNewItemArr) => theNewItemArr[0])
  )
}

export function deleteItem(id: number, db = connection) {
  return db('furniture').where('id', id).delete()
}

export function updateItem(
  id: number,
  updItem: FurnitureModel,
  db = connection
) {
  return db('furniture').where('id', id).update(updItem)
}
