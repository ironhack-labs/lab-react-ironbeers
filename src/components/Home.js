import React from 'react';
import AllBeers from './AllBeers';
import RandomBeer from './RandomBeer';
import NewBeer from './NewBeer';
import BeerDetail from'./BeerDetail';

import { Switch, Route, NavLink } from 'react-router-dom';


function Home() {
    return (
      <div>
        <ul>
          <li>
            <NavLink to="/beers">All beers</NavLink>
          </li>
          <li>
            <NavLink to="/random-beer">Random beer</NavLink>
          </li>
          <li>
            <NavLink to="/new-beer">New beer</NavLink>
          </li>
        </ul>

        <Switch>
          <Route exact path="/beers" component={AllBeers} />
          <Route path="/random-beer" component={RandomBeer} />
          <Route path="/new-beer" component={NewBeer} />
          <Route path="/beers/:id" component={BeerDetail} />
        </Switch>
      </div>
    );

}

export default Home;
