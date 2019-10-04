import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import RandomBeer from "./pages/RandomBeer/RandomBeer";
import Beers from "./pages/Beers/Beers";
import NewBeer from "./pages/NewBeer/NewBeer";
import BeerDetail from './pages/BeerDetail/BeerDetail'
import Container from './components/Container/Container'

import "./styles/base/_base.css"
import "./styles/base/_reset.css"
import "./styles/base/_fonts.css"
import "./styles/base/_typography.css"

import "./styles/atoms/_input.css"
import "./styles/atoms/_label.css"
import "./styles/atoms/_button.css"

import "./styles/molecules/_field.css"
import "./styles/molecules/_form.css"
import "./styles/molecules/_form-actions.css"

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/beers" component={Beers} />
            <Route exact path="/random-beer" component={RandomBeer} />
            <Route exact path="/new-beer" component={NewBeer} />
            <Route exact path="/view/:beerID" component={BeerDetail} />
          </Switch>
        </Container>
      </div>
    );
  }
}
