import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NewBeers from './pages/NewBeers';
import Beers from './pages/Beers';
import Home from './pages/Home';
import SingleBeer from './pages/SingleBeer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/new-beer" component={NewBeers} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/:id" component={SingleBeer} />
        <Route exact path="/Random" component={SingleBeer} />
      </Switch>
    </div>
  );
}

export default App;
