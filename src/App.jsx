import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './views/Home';
import AllBeers from './views/AllBeers';
import NewBeer from './views/NewBeer';
import RandomBeer from './views/RandomBeer';
import SingleBeer from './views/SingleBeer';

import NavBar from './components/NavBar';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/beers" exact component={AllBeers}></Route>
          <Route path="/random" exact component={RandomBeer}></Route>
          <Route path="/new" exact component={NewBeer}></Route>
          <Route path="/beers/:id" exact component={SingleBeer}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
