import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Beers from './components/Beers'


class App extends Component {
  render() {
    return (
      <div className="App" >
        <Navbar />

        <Switch>
          {/* <Route exact path='/' component={Home}></Route> */}
          <Route exact path='/beers' component={Beers}></Route>
          {/* <Route exact path='/random-beer' component={Home}></Route>
          <Route exact path='/new-beer' component={Home}></Route> */}
        </Switch>
      </div>
    )
  }

}

export default App
