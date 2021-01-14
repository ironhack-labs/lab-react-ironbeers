import React from 'react';
import './App.css';

import Home from './components/Home';
import ListBeers from './components/ListBeers';
import SingleBeer from './components/SingleBeer';
import RandomBeer from './components/RandomBeer';
// import NewBeer from './components/NewBeer';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/beers' component={ListBeers} />
        <Route path='/beers/:id' component={SingleBeer} />
        <Route path='/random-beer' component={RandomBeer} />
        {/* <Route path='/new-beer' component={NewBeer} /> */}
      </Switch>
    </div>
  );
}

export default App;
