import React from 'react';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import './App.css';
import AllBeers from './components/AllBeers/AllBeers';
import Home from './components/Home/Home';
import NewBeer from './components/NewBeer/NewBeer';
import RandomBeer from './components/RandomBeer/RandomBeer';
import SingleBeer from './components/singleBeer/SingleBeer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/allbeers" exact component={AllBeers} />
          <Route path="/beers/:id" exact component={SingleBeer} />
          <Route path="/random" exact component={RandomBeer} />
          <Route path="/new" exact component={NewBeer} />
        </Switch>
      </BrowserRouter>
      <br />
    </div>
  );
}

export default App;
