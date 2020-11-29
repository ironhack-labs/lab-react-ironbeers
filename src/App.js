import React from 'react';
import './App.css';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Components/Home.js'
import Beers from './Components/Beers';
import RandomBeer from './Components/RandomBeer';
import NewBeer from './Components/NewBeer';
import BeerDetail from './Components/BeerDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/beers" exact component={Beers} />
        <Route path="/random-beer" exact component={RandomBeer} />
        <Route path="/new-beer" exact component={NewBeer} />
        <Route exact path="/beers/:id" component={BeerDetail}/>
      </Switch>
    </Router>
  );
}

export default App;
