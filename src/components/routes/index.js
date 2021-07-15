import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BeersPage from '../pages/BeerPages/BeersPage';
import RandomBeer from '../pages/BeerPages/RandomBeer';
import HomePage from './../pages/HomePage';
import NewBeer from '../pages/BeerPages/NewBeer';
import { Container } from 'react-bootstrap';
import NavbarComponent from '../navigation/NavbarComponent';
import BeerDetails from '../pages/BeerPages/BeerDetails';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact render={() => <HomePage />} />
      <>
        <Container fluid="true">
          <NavbarComponent />

          <Route path="/beers" exact render={() => <BeersPage />} />
          <Route
            path="/beers/:id"
            render={(props) => <BeerDetails {...props} />}
          />

          <Route path="/random-beer" render={() => <RandomBeer />} />
          <Route path="/new-beer" render={() => <NewBeer />} />
        </Container>
      </>
    </Switch>
  );
};

export default Routes;
