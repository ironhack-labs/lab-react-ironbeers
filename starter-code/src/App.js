import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Route, Switch, Router } from 'react-router-dom';
import Home from './components/Home'
import AllBeers from './components/AllBeers'
import SingleBeer from './components/SingleBeer'
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
class App extends Component {
    constructor(){
        super()
        this.state = {
            beers: []
        }
    }
    componentDidMount() {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then(response => {
            this.setState({beers: response.data})
        })
    }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path ='/allbeers' component = {AllBeers} />
          <Route exact path="/singlebeer/:beerId" component={SingleBeer} />
          <Route exact path = '/randombeer' component = {RandomBeer} />
          <Route exact path = '/newbeer' component = {NewBeer} />
      </Switch>
      </div>
    );
  }
}

export default App;

{/* {this.state.beers.map(beer => <h1>{beer.name}</h1>)} */}