import React from 'react';
import { Route, Switch } from "react-router-dom";
import Main from './pages/Main';
import AllBeers from './pages/AllBeers';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import OneBeer from './pages/OneBeer';

// CSS 
import './App.css';

function App() {
  return (
    <div className="App">
        <Switch > 
          <Route exact path="/" component={Main} /> 
          <Route exact path="/beers" component={AllBeers}/> 
          <Route exact path="/random-beer" component={RandomBeer}/> 
          <Route exact path="/new-beer" component={NewBeer}/> 
          <Route exact path="/beers/:id" component={OneBeer}/> 
        </Switch>
    </div>
  );
}

export default App;
