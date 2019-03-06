import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BeerList from "./components/beers/BeerList";
import BeerDetails from "./components/beers/BeerDetails"
import {Switch, Route} from 'react-router-dom';
import RandomBeer from "./components/beers/RandomBeer"

class App extends Component {
  render() {
    return (
      <div className="App">

      
        <Switch>
          <Route exat path="/beer" component={BeerList} />
          <Route exat path="/single/:id" component={BeerDetails} />
          <Route exat path="/random" component={RandomBeer} />
        </Switch>


      </div>
    );
  }
}

export default App;
