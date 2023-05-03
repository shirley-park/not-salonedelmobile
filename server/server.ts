import express from 'express'
import path from 'path'
import furnListRouter from './routes/furnListRouter'

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/mycollection', furnListRouter)

export default server
