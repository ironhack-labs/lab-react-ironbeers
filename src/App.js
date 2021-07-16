import React from 'react';
import { Switch, Route } from 'react-router-dom'; //See index.js-file for more on this
import './App.css';
import ListBeers from './components/ListBeers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import Home from './components/Home';
import Header from './components/Header';
import SingleBeer from './components/SingleBeer';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/all-the-beers" component={ListBeers} />
        <Route path="/all-the-beers/:id" component={SingleBeer} />
        <Route path="/random-beer" component={RandomBeer} />
        <Route path="/new-beer" component={NewBeer} />
      </Switch>
    </div>
  );
}

export default App;
