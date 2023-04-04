import express from 'express'
import * as db from '../db/db'
// import { addNewItem, getAllItems } from '../db/db'

const router = express.Router()
router.use(express.json())

router.get('/', (req, res) => {
  db.getAllItems()
    .then((list) => {
      res.json(list)
    })
    .catch((err) => err.message)
})

router.post('/', (req, res) => {
  const newItem = req.body
  db.addNewItem(newItem)
    .then((newItemObj) => {
      res.json(newItemObj)
    })
    .catch((err) => err.message)
})

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.deleteItem(id)
    .then(() => res.status(200).send('deleted!'))
    .catch((err) => err.message)
})

export default router
