import { Switch, Route } from 'react-router-dom';
import NavMain from './components/NavMain';
import React from 'react';
import Home from './views/Home';
import AllBeers from './views/AllBeers';
import RandomBeer from './views/RandomBeer';
import NewBeer from './views/NewBeer';
import './App.css';
import { homedir } from 'os';

function App() {
  return (
    <div className="App">
      <NavMain />
      <switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={AllBeers} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={NewBeer} />
      </switch>
    </div>
  );
}

export default App;
