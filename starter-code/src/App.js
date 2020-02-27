import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <NavBar></NavBar>

        <Switch>
          <Route exact path='/' render={ () => <Home /> } />
          <Route path='/random-beer' />
        </Switch>

      </div>
    )
  }
}

export default App;
