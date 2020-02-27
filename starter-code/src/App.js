import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import { Switch, Route } from 'react-router-dom'
import Home from './components/home'
import BeersList from './components/BeersList'
import BeerDetails from './components/BeerDetails'
import RandomBeer from './components/RandomBeer'


import Header from './components/ui/header'



function App() {
  return (
    <main>
      <Header />

      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/beers" render={() => <BeersList />} />

        <Route path="/beer/:id" render={match => <BeerDetails {...match} />} />
        <Route path="/random-beer" render={() => <RandomBeer />} />

        {/* <Route path="/signup" render={() => <Signup />} />
          <Route path="/login" render={() => <Login />} /> */}
      </Switch>

    </main>

  )
}

export default App
