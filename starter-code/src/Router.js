import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/beers/Home';
import BeersContainer from './components/beers/BeersContainer';
import RandomBeer from './components/beers/RandomBeer';
import NewBeer from './components/beers/NewBeer';
import BeerDetail from './components/beers/BeerDetail';

class Router extends Component{
  render(){
    return(
  <BrowserRouter>
   
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/beers" component={BeersContainer} />
      <Route exact path="/beers/:id" component={BeerDetail} />
      <Route exact path="/random-beer" component={RandomBeer} />
      <Route exact path="/new-beer" component={NewBeer} />
    </Switch>
  </BrowserRouter>
   );
  }
}
export default Router