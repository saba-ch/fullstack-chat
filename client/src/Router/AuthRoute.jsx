import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import { storageService } from 'services'

const AuthRoute = ({ component: RouteComponent, ...rest }) => {
  const isAllowed = React.useCallback((params) => {
    const { sectionId } = params
    const token = storageService.getJwtToken()

    if (sectionId) {
      const { id } = jwtDecode(token)
      if (id !== sectionId) return false
    }
    if(!token) return false

    return true
  }, [])
  
  return (
    <Route
      {...rest}
      render={({ location, match: { params } }) => {
        if (!isAllowed(params)) {
          return <Redirect to={{ pathname: '/', state: { from: location } }} />
        }

        return <RouteComponent />
      }}
    />
  )
}

export default AuthRoute