import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import BeerList from './components/beerList/BeerList';
import RandomBeer from './components/randomBeer/RandomBeer';
import NewBeer from './components/newBeer/NewBeer';
import Header from './components/header/Header';
import Home from "./components/home/Home"
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App__content">
        <Switch>
          <Route path="/beers" component={BeerList} exact />
          {/* <Route path="/random-beer" component={RandomBeer} exact />
          <Route path="/new-beer" component={NewBeer} exact /> */}
          <Route path="/" component={Home} exact />
        </Switch>
      </div>
    </div>
  );
}

export default App;
