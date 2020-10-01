import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Custom Components
import Index from './pages/index/Index'
import BeerList from './pages/beersList/BeerList'
import RandomBeer from './pages/randomBeer/RandomBeer'
import NewBeer from './pages/newBeer/NewBeer'

// Styles Components
import './App.css'

function App() {

  return (
    <>
      <Switch>
        
        <Route path='/' exact render={() => <Index />} />
        <Route path='/beers' render={() => <BeerList />} />
        <Route path='/random-beer' render={() => <RandomBeer />} />
        <Route path='/new-beer' exact render={() => <NewBeer />} />
        
      </Switch>
    </>
  )

}

export default App
