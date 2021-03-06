import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import Auth from '../auth/userAuthentication'

const SecureRoute = ({ component: Component, ...rest }) => {
  if(Auth.isAuthenticated()) return (
    <Route {...rest} component={Component} />
  )
  return <Redirect to='/login' />
}

export default SecureRoute
