import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import AllBeersPage from './components/AllBeersPage';
import Header from './components/Header';
import RandomBeer from './components/RandomBeer';

function App() {
  return (
    <div className="App">

      <Header />

      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/beers" render={() => <AllBeersPage />} />
        <Route path="/random-beer" render={() => <RandomBeer />} />
      </Switch>

    </div>
  );
}

export default App;
