import React from 'react';
import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import BeerList from './components/BeerList'
import SingleBeer from './components/SingleBeer'
import './App.css';
import BeerService from './services/beer.service'



function App() {
  return (
    <>
    <main>
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/beer-list" render={(props) => <BeerList {...props} />} />
          <Route path="/beer/:id" render={(props) => <SingleBeer {...props} />} />
        </Switch>
      </main>
    </>
  );
}

export default App;
