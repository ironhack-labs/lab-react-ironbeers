import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Home from './Homepage'
import Beers from './Beers'
import RandomBeer from './RandomBeer'
import AddNewBeer from './AddNewBeer'
import SingleBeer from './SingleBeer'


function App() {
  return (
    <div className='all-info'>

      <Switch>
        <Route path='/' render={() => <Home />} />
        <Route path='/beers' render={() => <Beers />} />
        {/*<Route path='/random-beer' render={() => <RandomBeer />} />
        <Route path='/new-beer' render={() => <AddNewBeer />} />
        <Route path='/beers/:id' render={() => <SingleBeer />} /> */}
      </Switch>

    </div>
  )
}

export default App
