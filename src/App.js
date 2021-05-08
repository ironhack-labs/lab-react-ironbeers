import React from 'react';
import './App.css';
import Home from './components/Home';
import Beers from './components/Beers';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';
import Details from './components/Details';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/beers" component={Beers}/>
        <Route exact path="/random-beer" component={RandomBeer}/>
        <Route exact path="/create-beer" component={NewBeer}/>
        <Route exact path="/beers/:id" component={Details} />
      </Switch>
    </div>
  );
}

export default App;
