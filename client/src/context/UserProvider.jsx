import React from 'react'

import UserContext from './UserContext'

const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState({})

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
