import React from 'react'
import Home from './pages/home/Home'
import ListBeers from './pages/list-beers/ListBeers'
import NewBeer from './pages/new-beer/NewBeer'
import RandomBeer from './pages/random-beer/RandomBeer'

import { Switch, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/beers" render={() => <ListBeers />} />
        <Route path="/new-beer" exact render={() => <NewBeer />} />
        <Route path="/random-beer" render={ () => <RandomBeer />} />
      </Switch>
    </>
  )
}

export default App;
