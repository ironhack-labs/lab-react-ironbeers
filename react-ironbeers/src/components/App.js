import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import HomePage from './homePage/HomePage'
import ListBeers from './listBeers/ListBeers'
import { Switch, Route } from 'react-router-dom'
import BeerDetails from './beerdetails/BeerDetails'
import React, { Component } from 'react'
import RandomBeer from './randomBeer/RandomBeer'


class App extends Component { 

  constructor(){
    super()
    this.state = {
    home: true
    }
}


render(){
  return (
    <body>     
      <Switch>
      <Route path="/" exact render={() =>  <HomePage/>} />
      <Route path="/beers"  render={() => <ListBeers/>} />
      <Route path="/beer/:_id" render={props => <BeerDetails {...props} />} />
      <Route path="/random-beer" render={props => <RandomBeer {...props} />} />
      </Switch>

    </body>
  );
}
}

export default App;
