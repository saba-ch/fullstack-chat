import socket from 'socket.io-client'

import { storageService } from 'services'

import config from '../config'

const useComments = ({ sectionId }) => {
  const io = socket(`${config.WSURL}/${sectionId}`, {
    query: {
      token: storageService.getJwtToken()
    }
  })
  
  return io
}

export default useComments
