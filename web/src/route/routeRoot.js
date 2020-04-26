import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from './routePrivate'
import Login from '../components/LoginForm'
import Register from '../components/RegisterForm'
import Foods from '../components/Foods'

const RouteMain = () => {
  return (
    <Switch>
      <Route path={`${process.env.PUBLIC_URL}/login`} component={Login} />
      <Route exact path={`${process.env.PUBLIC_URL}/register`} component={Register} />
      <PrivateRoute path={`${process.env.PUBLIC_URL}/`} component={Foods} />
    </Switch>
  )
}

export default RouteMain
