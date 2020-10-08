import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
// import RandomBeer from './pages/RandomBeer';
import NewBeers from './pages/NewBeers';
import Beers from './pages/Beers';
import Home from './pages/Home';
import SingleBeer from './pages/SingleBeer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/beers" component={Beers} />
        <Route exact path="/:id" component={SingleBeer} />
        <Route path="/RandomBeer" component={SingleBeer} />
        <Route path="/new-beer" component={NewBeers} />
      </Switch>
    </div>
  );
}

export default App;
