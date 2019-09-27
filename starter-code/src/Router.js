import React, { Component } from 'react'
import { BrowserRouter , Switch,  Route } from 'react-router-dom';
import HomeContainer from './components/home/HomeContainer';
import BeerContainer from './components/beers/BeerContainer';
import BeerDetail from './components/beer/BeerDetail';
import NewBeer from './components/beers/NewBeer';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
				<Switch>
					<Route exact path="/" component={HomeContainer}/>
          <Route exact path="/beers" component={BeerContainer}/>
          <Route exact path="/beers/:id" component={BeerDetail} />
          <Route exact path="/beer-form" component={NewBeer} />
				</Switch>
      </BrowserRouter>
    )	
  }
}

export default Router;