import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import NavMain from './components/NavMain';
import Home from './views/Home';
import NewBeer from './views/NewBeer';
import RandomBeer from './views/RandomBeer';
import Beers from './views/Beers';

function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={NewBeer} />
      </Switch>
    </div>
  );
}

export default App;
