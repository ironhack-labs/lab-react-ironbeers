import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import AllBeers from './views/AllBeers';
import RandomBeer from './views/RandomBeer';
import NewBeer from './views/NewBeer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
        path='/'
        render={(historyProps) => {
          return <Home {...historyProps} />;
        }}
        />
        <Route
        path='beers'
        render={(historyProps) => {
          return <AllBeers {...historyProps} />;
        }}
        />
        <Route
        path='/random-beer'
        render={(historyProps) => {
          return <RandomBeer {...historyProps} />;
        }}
        />
        <Route
        path='/new-beer'
        render={(historyProps) => {
          return <NewBeer {...historyProps} />;
        }}
        />
      </Switch>
    </div>
  );
}

export default App;
