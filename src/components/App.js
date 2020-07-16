import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { Switch, Route } from 'react-router-dom'

import BeersList from './beers/Beer-list'
import BeerDetail from './beers/Beer-list/Beer-detail'

function App() {
  return (
    <>

      <Switch>
        <Route exact path="/beers" render={() => <BeersList />} />
        <Route path="/beers/:beer_id" render={props => <BeerDetail {...props} />} />
      </Switch>
    </>
  )
}

export default App
