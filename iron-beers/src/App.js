import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import Beers from './components/Beers'
import RandomBeers from './components/RandomBeers'
import NewBeer from './components/NewBeer'
import BeersDetail from './components/BeersDetail'

import { Switch, Route } from 'react-router-dom'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {

    return (
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/beers/:id" exact component={BeersDetail} />
          <Route path="/beers" exact component={Beers} />
          <Route path="/random-beer" exact component={RandomBeers} />
          <Route path="/new-beer" exact component={NewBeer} />
        </Switch>
      </main>

    );
  }
}

export default App;
