import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Beers from './pages/Beers';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import SingleBeer from './pages/SingleBeer';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={NewBeer} />
        <Route path="/beers/:beerId" component={SingleBeer} />

      </Switch>
    </div>
  );
}

export default App;
