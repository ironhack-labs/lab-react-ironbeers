import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import List from './components/List';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/all' component={List} />
     
    </Switch>

  )
}

export default Routes