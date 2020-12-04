import "./App.css"
import React from 'react'
import { Switch, Route } from "react-router-dom"
import { Link } from 'react-router-dom'

import Home from './Home'
import BeerList from './BeerList'
import RandomBeer from './RandomBeer'

function App() {
  return (
    <>
      <div>
        <Home />
      </div>
      <section>
        <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/beers" exact render={() => <BeerList />} />
        <Route path="/random-beer" exact render={() => <RandomBeer />} />
        </Switch>
      </section>
    </>
  )
}

export default App
