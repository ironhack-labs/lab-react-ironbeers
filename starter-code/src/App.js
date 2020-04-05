import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Home } from './components/home/Home'
import { BeerDetails } from './components/beer-details/BeerDetails'
import { Beers } from './components/beers/Beers'
import { Header } from './components/header/Header'
import { RandomBeer } from './components/random-beer/RandomBeer'
import NewBeer from './components/new-beer/NewBeer';


export const App = () => {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <Switch>
        <Route exact path={'/'} render={() => <Home />} />
        <Route exact path='/beers' render={() => <Beers/>} />
        <Route exact path='/random-beer/' render={() => <RandomBeer/>} />
        <Route exact path='/beers/:id' render={() => <BeerDetails/>} />
        <Route exact path='/new-beer' render={()=> <NewBeer/>} />

      </Switch>
    </div>
  );
}


export default App;