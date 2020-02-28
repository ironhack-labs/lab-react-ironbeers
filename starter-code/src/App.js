import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import Home from './components/Home';
import BeersList from './components/BeersList';
import BeerDetails from './components/BeerDetails';


export default class App extends Component {
  state = {
    beers: [],
    selectedBeer: {},
    randomBeer: {}
  }

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
    .then(allBeers => this.setState({beers: allBeers.data}))
  }

  getBeerDetails(beerId) {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
    .then(selectedBeer => this.setState({selectedBeer: selectedBeer.data}))
  }

  getRandomBeer() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
    .then(randomBeer => this.setState({randomBeer: randomBeer.data}))
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={_ => {
              return (
                <Home onRandomClick={() => this.getRandomBeer()}></Home>
              );
            }}
          />

          <Route
            exact
            path="/beers"
            render={_ => {
              return (
                <BeersList beers={this.state.beers} onBeerClick={beerId => this.getBeerDetails(beerId)}></BeersList>
              );
            }}
          />

          <Route
            exact
            path="/beers/:id"
            render={_ => {
              return (
                <BeerDetails beer={this.state.selectedBeer}></BeerDetails>
              );
            }}
          />

          <Route
            exact
            path="/random-beer"
            render={_ => {
              
              return (
                <BeerDetails beer={this.state.randomBeer}></BeerDetails>
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

