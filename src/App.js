import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import BeerDetail from './components/BeerDetail';




function App() {
  return (
    <React.Fragment>
        <Home/>
      <Switch>
      <Route exact path='/home' render={() => {
              return <Home />
            }} />
          <Route exact path='/beers' render={() => {
              return <Beers />
            }} />
      <Route exact path='/random-beers' render={() => {
              return <RandomBeer />
            }} />
             <Route exact path='/new-beer' render={() => {
              return <NewBeer />
            }} />

<Route exact path="/BeerDetail/:id" component={BeerDetail} />


      
      </Switch>
    </React.Fragment>
  );
}

export default App;
