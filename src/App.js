import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home/Home';
import Beers from './components/Beers/Beers';
import RandomBeer from './components/RandomBeer/RandomBeer';
import NewBeer from './components/NewBeer/NewBeer';
import BeerDetail from './components/BeerDetail/BeerDetail';
import AddBeer from './components/AddBeer/AddBeer';

function App() {
  return (
    <React.Fragment>

      <Home />

      <Switch>
        <Route exact path='/Home' render={() => {
          return <Home />
        }} />
        <Route exact path='/beers' render={() => {
          return <Beers />
        }} />
        <Route exact path='/random-beers' render={() => {
          return <RandomBeer />
        }} />
        <Route path='/add-beers' render={() => {
          return <AddBeer />
        }} />

        <Route exact path='/beers/:id' component={BeerDetail} />

       

        

      </Switch>


    </React.Fragment>
  );
}

export default App;
