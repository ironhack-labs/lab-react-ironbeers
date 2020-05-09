import React, { Component } from 'react';
import Home from "./views/Home";
import AllBeers from "./views/AllBeers";
import NewBeer from "./views/NewBeer";
import RandomBeer from "./views/RandomBeer";
import OneBeer from "./views/OneBeer";

import { Switch, Route } from "react-router-dom";
import './App.css';

//There is just the routing here. The first page is in views/home.jsx


class App extends Component {
  render() {
    return (
      <div className="App">  
<Switch>
<Route exact path="/" component={Home} />
<Route exact path="/all-beers" component={AllBeers} />
<Route exact path="/random-beer" component={RandomBeer} />
<Route exact path="/beer/:id" component={OneBeer} />
<Route exact path="/new-beer" component={NewBeer} />
</Switch>
      </div>
    );
  }
}

export default App;
