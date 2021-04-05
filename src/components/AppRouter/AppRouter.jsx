import React from 'react'
import { Route, Switch } from 'react-router-dom'
import BeerDetail from '../BeerDetail/BeerDetail';
import BeerList from '../BeerList/BeerList';
import NewBeer from '../NewBeer/NewBeer';


import Home from '../Home/Home';

const AppRouter = () => {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={BeerList} />
        <Route exact path="/random-beer" component={BeerDetail} />
        <Route exact path="/new-beer" component={NewBeer} />
      </Switch>
    );
}

export default AppRouter