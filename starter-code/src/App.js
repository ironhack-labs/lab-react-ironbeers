import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import { Switch, Route } from 'react-router-dom'
import Home from './components/home'
import BeersList from './components/BeersList'

import Header from './components/ui/header'



function App() {
  return (
    <main>
      <Header />

      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/beers" render={() => <BeersList />} />

        {/* <Route path="/detalles/:id" render={match => <CoasterDetails {...match} />} />
        <Route path="/signup" render={() => <Signup />} />
        <Route path="/login" render={() => <Login />} /> */}
      </Switch>

    </main>

  )
}

export default App
