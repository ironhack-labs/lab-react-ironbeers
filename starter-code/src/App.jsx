import React, { Component } from 'react'
import axios from "axios"
import Nav from "./components/Nav"
import bulma from "bulma/css/bulma.css";
import {Switch,Route} from "react-router-dom"
import AllBeers from "./components/AllBeers"
import RandomBeer from "./components/RandomBeer"
import NewBeer from "./components/NewBeer"
import Home from "./components/Home"
import BeerDetails from './components/BeerDetails';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }
  }

  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/random-beer" component={RandomBeer}/>
          <Route path="/new-beer" component={NewBeer}/>
          <Route path="/beer-details/:id" component={BeerDetails}/>
          <Route path="/all-beers" component={AllBeers}/>
        </Switch>
      </div>
    )
  }
}

export default App
