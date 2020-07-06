import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import HomePage from './components/HomePage';
import AllBeers from './components/AllBeers';
import BeerDetail from './components/BeersDetail'
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import {Switch, Route } from 'react-router-dom';

class App extends Component {

  
  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
    .then(response => {
        this.setState({beers: response.data})
    })
}

  render() {
    return (
      <div>
      <Switch>
          <Route exact path="/"  render ={HomePage} />
          <Route exact path="/beers"   component ={AllBeers} />
          <Route path="/beers/:id" component ={BeerDetail} />
          <Route path="/randombeer"  component ={RandomBeer} />
          <Route exact path="/newbeer"  component = {NewBeer}/>
      </Switch>    
      </div>
    );
  }
}

export default App;