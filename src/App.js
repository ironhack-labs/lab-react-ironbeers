import React, { Component } from 'react';
import Home from "./components/homepage/Home"
import { Link, Switch, Route } from 'react-router-dom'
import Beers from "./components/beerspage/Beers"
import RandomBeer from "./components/randombeerspage/RandomBeer"
import NewBeer from "./components/newbeer/NewBeer"

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/beers" render={() => <Beers/>}/>
          <Route exact path="/random-beer" render={() => <RandomBeer/>}/>
          <Route exact path="/new-beer" render={() => <NewBeer/>}/>
          <Route path="/" render={() => <Home/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
