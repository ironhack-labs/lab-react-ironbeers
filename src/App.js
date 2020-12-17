import React from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Homepage from './views/Homepage';
import NavBar from './components/NavBar';
import AllBeers from './components/AllBeers';
import  BeerDetail  from './components/BeerDetail';
import Randombeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';

class App extends React.Component{
  state = {
    beers: [],
  };
  componentDidMount = () => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((responseBack) => {
        this.setState({ beers: responseBack.data });
      });
  };

  render(){
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path = "/" component = { Homepage } />
          <Route exact path = "/beers" component = { AllBeers } />
          <Route exact path = "/beers/:id" component = { BeerDetail } />
          <Route exact path = "/random-beer" component = { Randombeer } />
          <Route exact path = "/new-beer" component = { NewBeer } />
        </Switch>
      </div>
    );
  }
};

export default App;
