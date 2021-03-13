import React from 'react';
import './App.css';
import Home from './components/home/Home';
import BeerList from './components/beer-list/BeerList';
import BeerDetail from './components/beer-detail/BeerDetail';
import BeerForm from './components/beer-form/NewBeer';
import RandomBeer from './components/random-beer/RandomBeer';

import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/beers' component={BeerList}/>
          <Route exact path='/beers/:id' component={BeerDetail}/>
          <Route path='/random-beer' component={RandomBeer}/>
          <Route path='/new-beer' component={BeerForm}/>
        </Switch>
    </div>
  );
}

export default App;
