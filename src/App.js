import React from 'react';
import './App.css';
import Home from './views/Home';
import ListBeers from './views/ListBeers';
import BeerDetails from './views/BeerDetails';
import NewBeer from './views/NewBeer';
import NavHomeBar from './views/NavBar';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1> Iron Beers </h1>
        <NavHomeBar />

        <Switch>
          <Route exact path="/beers" component={ListBeers} />
          <Route exact path="/" component={Home} />
          <Route exact path="/beers/:id" component={BeerDetails} />
          <Route
            exact
            path="/random-beer"
            render={(props) => <BeerDetails {...props} isRand={true} />}
          />
          <Route exact path="/new" component={NewBeer} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
