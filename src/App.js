import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import AllBeers from './Components/AllBeers';
import RandomBeer from './Components/RandomBeer';
import NewBeer from './Components/NewBeer';
import OneBeer from './Components/OneBeer';
// import Navbar from './Components/Navbar';
// import axios from 'axios';

class App extends Component {
  state = {
    beers: [],
  };

  // getBeersData() {
  //   axios
  //     .get('https://ih-beers-api2.herokuapp.com/beers')
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err));
  // }

  render() {
    return (
      <div className="App">
        <main>
          {/* <Switch> */}
          <Route exact path="/" component={HomePage} />

          <Route exact path="/beers" component={AllBeers} />

          <Route exact path="/beers/:beerId" component={OneBeer} />

          <Route exact path="/random" component={RandomBeer} />

          <Route exact path="/create" component={NewBeer} />
          {/* </Switch> */}
        </main>
      </div>
    );
  }
}

export default App;
