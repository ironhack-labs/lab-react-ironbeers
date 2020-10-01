import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

import NavBar from './layout/NavBar'
import Home from './pages/home/Home'
import Beers from './pages/beers/Beers'
import BeerCard from './pages/beers/BeerCard'

// import BeerDetails from './pages/beers/BeerDetail'
// import NewBeer from './pages/new-beer/NewBeer'
// import Search from './pages/search/Search'
// import NavBar from './layout/NavBar'
import RandomBeer from './pages/beers/RandomBeer'


import { Switch, Route } from 'react-router-dom'


class App extends Component {

  constructor() {
    super()
    this.state = {
      beers: []
    }
  }


  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then((res) => {
        this.setState({
          beers: res.data
        })
      })
  }


  render() {
    return (

      <>
        <NavBar />
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/beers" render={() => <Beers />} />
          <Route path="/beerCard/:id" render={(props) => <BeerCard  {...props} beers={this.state.beers} />} />
          <Route path="/randomBeer" render={() => <RandomBeer beers={this.state.beers} />} />
        </Switch>
      </>
    )
  }
}

export default App;