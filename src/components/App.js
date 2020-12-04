import React from 'react'
import { Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './../components/App.css'

import Home from './home/Home'
import BeerList from './beerList/BeerList'
import BeerDetails from './beerDetails/BeerDetails'
import RandomBeer from './randomBeer/RandomBeer'
import BeerForm from './beerForm/BeerForm'


function App() {

  return (
    
      <Switch>
        <Route path="/" exact render={() => <Home/>}/>
        <Route path="/beers" exact render={() => <BeerList/>}/>
        <Route path="/beers/:beer_id" exact render={props => <BeerDetails {...props}/>}/>
        <Route path="/random-beer" exact render={props => <RandomBeer {...props} />}/>
        <Route path="/new-beer" exact render={() => <BeerForm/>}/>
      </Switch>
  )
}



export default App