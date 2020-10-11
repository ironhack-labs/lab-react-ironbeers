import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

import Home from "./pages/Home";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";
import AllBeers from "./pages/AllBeers";
import OneBeer from "./pages/OneBeer";

import './App.css';


function App() {
  return (
    <div className="App">

    <header>
      <Link to="/">Home</Link>
    </header>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={AllBeers} />
        <Route exact path="/beers/:id" component={OneBeer} />
        <Route path="/random-beer" component={RandomBeer} />
        <Route path="/new-beer" component={NewBeer} />
      </Switch>
     
    </div>
  );
}

export default App;
