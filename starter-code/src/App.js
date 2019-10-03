import React, { Component } from 'react';
import './App.css';
import Home from './Home'
import Beers from './Beers'
import oneBeer from './oneBeer'
import Random from './Random'
import New from './New'
import { BrowserRouter, Route, Switch } from "react-router-dom";

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
