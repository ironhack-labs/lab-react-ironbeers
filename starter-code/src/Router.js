import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import BeerAll from './components/beers/BeerAll';
//import BeerForm from './components/beers/BeerForm';
//import BeerRandom from './components/beers/BeerRandom';


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/beers" component={BeerAll} />
      {/* <Route exact path="/beers/create" component={BeerForm} /> */}
      {/* <Route exact path="/beers/random" component={BeerRandom} /> */}
    </Switch>
  </BrowserRouter>
);

export default Router;