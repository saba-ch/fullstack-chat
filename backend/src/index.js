import http from 'http'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import path from 'path'

import app from './app'
import Socket from './socket'

import { authenticate } from './middlewares'

import sectionRoutes from './modules/section/sectionRoutes'
import commentRoutes from './modules/comment/commentRoutes'

console.log("🚀 ~ file: index.js ~ line 22 ~ process.env.NODE_ENV", process.env.NODE_ENV)
dotenv.config({
  path: path.join(__dirname, `../config/local.env`)
})

const PORT = process.env.PORT || 8000

const bootstrap = async () => {
  await mongoose.connect(process.env.DB_URL, {
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  console.log('Connected to mongodb')

  app.get('/', (req, res) => {
    res.status(200).send({ success: true })
  })

  app.use(authenticate)

  app.use(sectionRoutes)
  app.use(commentRoutes)

  app.all('*', (_req, res) => {
    res.status(404).send({ message: 'Not Found' })
  })

  const server = http.createServer(app)

  Socket.init(server)

  server.listen(PORT, () => console.info(`Server Listening on port: ${PORT}`))
}

bootstrap()
