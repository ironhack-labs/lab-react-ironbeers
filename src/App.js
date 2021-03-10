import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Beers from './components/beers/Beers';
import Home from './components/home/Home';
import NewBeer from './components/new-beer/NewBeer';
import RandomBeer from './components/random-beer/RandomBeer';
import BeerDetails from './components/beer-details/BeerDetails';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={NewBeer} />
        <Route path="/beers/:id" component={BeerDetails}/>
      </Switch>
    </Router>
  );
}

export default App;
