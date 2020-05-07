import React, { Component } from 'react'

import Home from './pages/home/home'

import { Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    )
  }
}

export default App
