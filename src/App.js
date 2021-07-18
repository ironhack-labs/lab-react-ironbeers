import React from 'react';
import MainPage from './pages/MainPage';
import AllBeers from './pages/AllBeers';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';
import BeerDetails from './pages/BeerDetails';
import './App.css';
import { Switch, Route, useHistory } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path={'/'} component={MainPage} />
        <Route exact path={'/beers/:id'} render={(routeProps) => {
          return <BeerDetails  {...routeProps} />
        }} />
        <Route path={'/beers'} component={AllBeers} />
        <Route path={'/random-beer'} component={RandomBeer} />
        <Route path={'/new-beer'} component={NewBeer} />
      </Switch>
    </div>
  );
}

export default App;
