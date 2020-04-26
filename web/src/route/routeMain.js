import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'

const routeMain = (props) => {
  return (
    <Switch>
      <Route exact path={`${process.env.PUBLIC_URL}/`} component={(route) => <Home {...props} {...route} />} />
    </Switch>
  )
}

export default routeMain
