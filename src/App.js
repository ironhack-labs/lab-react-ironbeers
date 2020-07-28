import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Home from './components/Home'
import BeerListContainer from './components/beerList/BeerListContainer'
import NewBeerForm from './components/NewBeerForm'

import './App.css';
import SingleBeer from './components/SingleBeer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/beers" component={BeerListContainer}/>
        <Route path="/beers/:id" render={(props) => <SingleBeer {...props}/>} />
        <Route path="/random-beer" render={(props) => <SingleBeer random {...props}/>}/>
        <Route path="/new-beer" component={NewBeerForm}/>
      </Switch>
    </div>
  );
}

export default App;
