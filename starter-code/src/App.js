import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

// import HeaderMain from "./views/HeaderMain";


import Home from "./views/Home";
import Beers from "./views/Beers";
import RandomBeer from "./views/RandomBeer";
import NewBeer from "./views/NewBeer";
import SingleBeer from "./views/SingleBeer";
import NotFound from "./views/NotFound";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">


      <Switch>
        {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
        <Route exact path="/" component={Home} />
        <Route exact path="/Beers" component={Beers} />
        <Route path="/RandomBeer" component={RandomBeer} />
        <Route path="/SingleBeer/:id" component={SingleBeer} />
        <Route path="/NewBeer" component={NewBeer} />
        <Route path="*" component={NotFound} />
      </Switch>
      </div>
    );
  }
}

export default App;
