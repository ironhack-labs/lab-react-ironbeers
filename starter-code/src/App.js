import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {Switch, Link, Route} from 'react-router-dom';
import Home from './components/Homepage';
import Beers from './components/Beers';
import Random from './components/Random';
import NewBeer from './components/NewBeer';
import BeerDetail from './components/BeerDetail';
import allbeerimg from './images/beers.png';
import randombeerimg from './images/random-beer.png';
import newbeerimg from './images/new-beer.png';

class App extends Component {
  state = {
    theBeers: null,
    showHeader: true
    // ready: false
  };

  componentDidMount() {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then(theResults => {
        let x = theResults.data;
        this.setState({
          theBeers: x
          // ready: true
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" render={props => (<Beers {...props} listOfBeers={this.state.theBeers} /> )} />
          <Route exact path="/random-beer" render={props => (<Random {...props} listOfBeers={this.state.theBeers} />)} />
          <Route exact path="/new-beer" render={props => (<NewBeer {...props} listOfBeers={this.state.theBeers} />)} />
          <Route exact path="/beer-detail/:beerId" render={props => (<BeerDetail {...props} listOfBeers={this.state.theBeers} />)}  />
        </Switch>
      </div>
    );
  }
}

export default App;
