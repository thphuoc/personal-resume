import { Switch, Route } from 'react-router-dom'
import React from 'react'
import App from './pages/home/App'

const Router = () => (
  <Switch>
    <Route exact path='/' component={App}/>
  </Switch>
)

export default Router