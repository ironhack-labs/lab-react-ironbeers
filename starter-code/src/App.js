import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import Beers from './components/Beers'
import oneBeer from './components/oneBeer'
import Random from './components/Random'
import New from './components/New'
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers}/>
          <Route exact path='/beers/:id' component={oneBeer} />
          <Route exact path="/randomBeer" component={Random}/>
          <Route exact path="/newBeer" component={New}/>
        </Switch>
      </div>
    );
  }
}

export default App;
