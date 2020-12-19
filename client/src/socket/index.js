import io from 'socket.io-client'

import config from '../config'

class Socket {
  static socket

  static disconnect = () => {
    Socket.socket?.disconnect()
  }

  static connect = ({ nsp, query }) => {
    return new Promise((resolve, reject) => {
      const socket = io(`${config.WSURL}/${nsp}`, {
        reconnectionDelayMax: 10000,
        query
      })

      socket.on('connect', () => {
        Socket.socket = socket
        resolve()
      })

      socket.on('error', () => {
        reject()
      })
    })
  }
}

export default Socket
