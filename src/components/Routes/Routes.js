import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LandingPage from '../LandingPage/LandingPage';
import Listing from '../Listing/Listing';
import SingleBeer from '../SingleBeer/SingleBeer';
import BeerForm from '../BeerForm/BeerForm';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={LandingPage} />
      <Switch>
        <Route exact path="/all-beers" component={Listing} />
        <Route
          path="/beer/:id"
          render={(routeProp) => <SingleBeer id={routeProp.match.params.id} />}
        />
        <Route exact path="/new-beer" component={BeerForm} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
