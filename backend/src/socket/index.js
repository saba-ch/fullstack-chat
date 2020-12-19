import socketIO from 'socket.io'

import commentService from '../modules/comment/commentService'
import jwtService from '../services/jwtService'

class Socket {
  constructor() {
    this.onMessage = this.onMessage.bind(this)
    this.onConnect = this.onConnect.bind(this)
    this.onTyping = this.onTyping.bind(this)
  }

  io
  init(httpServer) {
    const io = socketIO(httpServer, {
      cors: {
        origin: true
      }
    })

    this.io = io

    io
      .of(this.nspMiddleware)
      .use(this.authMiddleware)
      .on('connect', this.onConnect)
  }

  async nspMiddleware(path, query, next) {
    return next(null, true)
  }

  onTyping(socket) {
    const { userName } = socket
    return () => {
      socket.nsp.emit('typing/start', { userName })
    }
  }

  async authMiddleware(
    socket,
    next
  ) {
    try {
      const nspName = socket.nsp.name
      const { token } = socket.handshake.query

      const authData = await jwtService.verify({ token })

      if (!authData) throw new Error('Invalid token')
      if (authData.id !== nspName.slice(1)) throw new Error('Invalid token')

      return next()
    } catch (err) {
      console.error(err, 'authorization failed')
    }
  }

  onMessage({ sender, socket }) {
    return async ({ message }) => {
      const msg = await commentService.createComment({
        sender,
        sectionId: socket.nsp.name.slice(1),
        message
      })

      socket.nsp.emit('message', msg.toJSON())
    }
  }

  onConnect(socket) {
    const { handshake, nsp } = socket
    socket.userName = handshake.query.name

    socket.on('message', this.onMessage({
      sender: socket.userName,
      sectionId: nsp.name.slice(1),
      socket
    }))

    socket.on('typing', this.onTyping(socket))
  }
}

export default new Socket()
