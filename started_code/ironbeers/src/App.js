import React, { Component } from 'react';
import './App.css';
import BeerList from "./components/beers/BeerList";
import BeerDetails from "./components/beers/BeerDetails"
import {Switch, Route} from 'react-router-dom';
import RandomBeer from "./components/beers/RandomBeer"
import AddBeer from './components/beers/AddBeer';
import Home from './components/beers/Home'


class App extends Component {
  render() {
    return (
      <div className="App">

        {/* <Home/> */}
        <Switch>
          <Route exat path="/home" component={Home} />
          <Route exat path="/beer" component={BeerList} />
          <Route exat path="/single/:id" component={BeerDetails} />
          <Route exat path="/random" component={RandomBeer} />
          <Route exat path="/addbeer" component={AddBeer} />
        </Switch>


      </div>
    );
  }
}

export default App;
