import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Switch, Route } from 'react-router-dom'

import MainPage from "./MainPage"
import MainBeersList from "./MainBeersList"
import MainDetailedBeer from "./MainDetailedBeer"
import MainCreateBeer from "./MainCreateBeer"

function App() {
  return (
    <>
    <Switch>
        <Route path="/beers" render={() => <MainBeersList />} />
        <Route path="/random-beer" render={() => <MainDetailedBeer />} />
        <Route path="/new-beer" render={() => <MainCreateBeer />} />

        <Route path="/:beerId" render={props => <MainDetailedBeer {...props} />} />
        <Route exact path="/" render={() => <MainPage />} />
      </Switch>
      </>
  )
}

export default App;
