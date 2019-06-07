import React, { Component } from 'react';
import './App.css';
import Home from "./components/Home"
import BeerList from "./components/BeerList"
import BeerDetail from "./components/BeerDetail"
import RamdomBeer from "./components/BeerRandom"
import NewBeer from "./components/NewBeer"



import { Switch, Route } from "react-router-dom";


class App extends Component {

  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/birraList" exact component={BeerList} />
        <Route path="/birraSola/:id" exact component={BeerDetail} />
        <Route path="/birraDeBorracho" component={RamdomBeer} />
        <Route path="/nuevaBirra" component={NewBeer} />
      </Switch>
    );
  }
}

export default App;
