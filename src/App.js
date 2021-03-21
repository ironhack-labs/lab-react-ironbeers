import React from 'react';
import './App.css';
import Home from './Views/Home';
import Details from './Components/Details';
import NewBeer from './Components/NewBeer';
import { Switch, Route } from "react-router-dom";
import AllBeers from './Components/AllBeers';
import ID from './Components/ID';
import Random from './Components/Random';

function App() {


  return (
    <div className="App">

      <Switch>

        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={AllBeers} />
        <Route exact path="/random" component={Random} />
        <Route exact path="/new" component={NewBeer} />
        <Route exact path="/beers/:id" component={ID} />


      </Switch>

    </div>
  );
}

export default App;
