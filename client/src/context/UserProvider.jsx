import React from 'react'

import { storageService } from 'services'

import UserContext from './UserContext'

const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState({
    name: storageService.getName()
  })

  const updateUser = (updates) => {
    setUser(state => ({ ...state, ...updates }))
  }

  return (
    <UserContext.Provider value={{ updateUser, user }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
