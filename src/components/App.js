import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import BeerHome from './beerHome/beerHome'


import { Switch, Route } from 'react-router-dom'

import BeerList from './beerList/beerList'


function App() {
  return (
    <Switch>
      <Route path="/beers" exact render={() => <BeerList />} />
      <BeerHome/>
    </Switch>
  )
}

export default App