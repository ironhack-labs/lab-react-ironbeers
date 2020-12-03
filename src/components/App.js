import React from 'react'
import './App.css'
import { Switch, Route} from "react-router-dom"
import Home from "./home"
import Beers from "./beers"
import RandomBeer from "./random-beer"
import AddNewBeer from "./new-beer"
import BeerSingle from "./beer-single"

function App() {
  return (
    <div className="wrapper">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route path="/beers/:id" component={BeerSingle} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={AddNewBeer} />
      </Switch>
    </div>
  )
}

export default App
