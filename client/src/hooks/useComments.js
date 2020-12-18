import React from 'react'

import UserContext from 'context/UserContext'
import { commentService, storageService } from 'services'
import Socket from 'socket'

const useComments = ({ sectionId }) => {
  const [comments, setComments] = React.useState([])
  const { user: { name } } = React.useContext(UserContext)
  
  React.useEffect(() => {
    Socket.connect({
      nsp: sectionId,
      query: {
        token: storageService.getJwtToken(),
        name
      }
    })
  }, [sectionId, name])

  React.useEffect(() => {
    commentService.getComments()
      .then(({ data }) => setComments(data))
      .catch(err => console.error(err))

  }, [sectionId])

  const sendMessage = (message) => {
    Socket.socket.emit('message', { message })
  }

  return {
    comments,
    sendMessage
  }
}

export default useComments
