import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import './App.css';
import HomePage from './components/home-page/HomePage';
import ListBeers from './components/list-beers/ListBeers';
import RandomBeer from './components/random-beer/RandomBeer';
import NewBeer from './components/new-beer/NewBeer';


function App() {
  return (
    <div className="App">

      <Switch>        
        <HomePage exact path="/home" component={HomePage} />
        <Route path="/beers" component={ListBeers} />
        <Route path="/random-beer" component={RandomBeer} />
        <Route path="/new-beer" component={NewBeer} />
        <Redirect to="/home" />
      </Switch>


    </div>

  );
}

export default App;
