import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import HomePage from './components/HomePage/HomePage'
import BeersList from './components/BeersList/BeersList';
import BeersDetails from './components/BeerDetails/BeersDetails';
import RandomBeer from './components/RandomBeer/RandomBeer';
import NewBeer from './components/NewBeer/NewBeer';

function App() {
  return (
    <div className="App">

   

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path='/beers' component= {BeersList} />
      <Route exact path='/random-beer' component= {RandomBeer} />
      <Route exact path='/new' component={NewBeer}/>
      <Route exact path='/beers/:id' component= {BeersDetails} />
    
     
    </Switch>

   
      
    </div>
  );
}

export default App;
