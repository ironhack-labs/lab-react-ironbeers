import React, { Component } from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import BeersList from "./components/BeersList"
import BeerCard from "./components/BeerCard"
import RandomBeer from "./components/RandomBeer"
import AddBeer from "./components/AddBeer"
import SearchBeer from "./components/SearchBeer"

class App extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/beers' component={BeersList} />
          <Route exact path='/random' component={RandomBeer} />
          <Route exact path='/beers/:id' component={BeerCard} />
          <Route exact path='/add' component={AddBeer} />
          <Route exact path='/search' component={SearchBeer} />

        </Switch>
      </main>
    )
  }
}

export default App;