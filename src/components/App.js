import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import AllBeers from './pages/beerList/AllBeers'

import './App.css'

function App() {
  return (
      <>
          <Switch>
            <Route path='/' exact render={() => <Home />} />
            <Route path='/beers' render={() => <AllBeers />} />
          </Switch>
    </>
  )
}

export default App