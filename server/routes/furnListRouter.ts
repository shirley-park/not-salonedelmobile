import express from 'express'
import { getAllItems } from '../db/db'

const router = express.Router()

router.use(express.json())

router.get('/', (req, res) => {
  getAllItems()
    .then((list) => {
      res.json(list)
    })
    .catch((err) => err.message)
})

export default router
