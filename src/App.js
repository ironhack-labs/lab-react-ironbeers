import React from 'react';
import Home from './components/home/Home';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AllBeer from './components/allbeer/AllBeer';
import RandomBeer from './components/randombeer/RandomBeer';
import NewBeer from './components/new-beer/NewBeer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/beers" exact component={AllBeer} />
          <Route path="/random-beer" exact component={RandomBeer} />
          <Route path="/new-beer" exact component={NewBeer} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
