import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import { Route, Switch } from 'react-router-dom';
import BeerList from './components/BeerList';
import BeerDetails from './components/BeerDetails';
import RandomBeer from './components/RandomBeer';
import NewBeerForm from './components/NewBeerForm';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/list" component={BeerList} />
        <Route exact path="/details/:id" component={BeerDetails} />
        <Route exact path="/random" component={RandomBeer} />
        <Route exact path="/new" component={NewBeerForm} />
      </Switch>
    </div>
  );
}

export default App;
