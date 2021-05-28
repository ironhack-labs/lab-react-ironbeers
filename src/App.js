import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Pages/Home';
import Beers from "./Pages/Beers";
import RandomBeer from "./Pages/RandomBeer";
import NewBeer from "./Pages/NewBeer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} />
          <Route exact path="/random-beer" component={RandomBeer} />
          <Route exact path="/new-beer" component={NewBeer} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
