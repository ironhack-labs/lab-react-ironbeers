import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import { Route , Switch } from "react-router-dom"
// import axios from 'axios'
import { Beers } from './components/Beers';
import  BeerDetail  from './components/BeerDetail';
import Randombeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Navbar />

        {/* <Beers 
          beers= {this.state.beers}
        /> */}

        <Switch>

          <Route exact path = "/" component = { Homepage } />
          <Route exact path = "/beers" component = { Beers } />
          <Route exact path = "/beers/:id" component = { BeerDetail } />
          <Route exact path = "/random-beer" component = { Randombeer } />
          <Route exact path = "/new-beer" component = { NewBeer } />
        
        </Switch>

      </div>
    );
  }
}

export default App;
