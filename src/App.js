import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import ListBeers from './views/ListBeers';
import RandomBeer from './views/RandomBeer';
import NewBeer from './views/NewBeer';
import SingleBeer from './views/SingleBeer';

function App() {
  return (
    <div className="App">
      <Switch>
      
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={ListBeers} />

        <Route path="/random-beer" component={RandomBeer} />
        <Route path="/beers/:beerId" component={SingleBeer} />

        <Route path="/new-beer" component={NewBeer} />
      </Switch>
    </div>
  );
}

export default App;
