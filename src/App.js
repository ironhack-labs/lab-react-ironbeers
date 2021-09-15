import React from 'react';
import { Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import BeerList from './components/BeerList/BeerList';
import Beer from './components/Beer/Beer';
import RandomBeer from './components/RandomBeer/RandomBeer';
import NewBeer from './components/NewBeer/NewBeer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='App__content'>
        <Switch>
          <Route path="/beers" component={BeerList} exact />
          <Route path='/beers/:_id' component={Beer} />
          <Route path='/random-beer' component={RandomBeer} />
          <Route path='/new-beer' component={NewBeer} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
