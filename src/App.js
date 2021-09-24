import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/beers" component={Beers} />
        <Route path="/random-beer" component={RandomBeer} />
        <Route path="/new-beer" component={NewBeer} />
      </Switch>
    </div>
  );
}

export default App;
