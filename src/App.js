import React from 'react';
import './App.css';
// import router
import {Switch, Route} from 'react-router-dom'
// import components
import Home from './components/Home';
import AllBeers from './components/AllBeers';
import BeerInfo from './components/BeerInfo';
import NewBeer from './components/NewBeer';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/beers' component={AllBeers}/>
        <Route exact path='/beers/:id' component={BeerInfo}/>
        <Route exact path='/random-beer' component={BeerInfo}/>
        <Route exact path='/new-beer' component={NewBeer}/>
      </Switch>
    </div>
  );
}

export default App;
