import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from "react-router-dom";
import Beers from "./pages/beers";
import RandomBeer from "./pages/random-beer";
import NewBeer from "./pages/new-beer";
import Home from "./pages/Home";
import Nav from "./components/nav";


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }
  }

  render() {
    return (
      <div>
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/beers" component={Beers} />
        <Route path="/random-beer" component={RandomBeer} />
        <Route path="/new-beer" component={NewBeer} />
      </Switch>
    </div>
    )
  }
}

export default App
