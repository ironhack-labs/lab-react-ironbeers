import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './scenes/Home'
import Beers from './scenes/Beers'
import SingleBeer from './scenes/SingleBeer'
import RandomBeer from './scenes/RandomBeer'
import CreateBeer from './scenes/CreateBeer'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/beers/:id" component={SingleBeer} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={CreateBeer} />
      </Switch>
    </div>
  );
}

export default App;
