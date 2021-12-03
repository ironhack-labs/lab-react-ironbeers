import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import Beers from './Beers/Beers';
import RandomBeer from './RandomBeer/RandomBeer';
import BeerDetails from './Beers/BeerDetails';
import NewBeer from './NewBeer/NewBeer';

function App() {
  return (
    <>
      <main>
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/beers" exact render={(props) => <Beers {...props} />} />
          <Route
            path="/beers/:id"
            render={(props) => <BeerDetails {...props} />}
          />
          <Route path="/random" render={(props) => <RandomBeer {...props} />} />
          <Route path="/new" render={(props) => <NewBeer {...props} />} />
        </Switch>
      </main>
    </>
  );
}

export default App;
