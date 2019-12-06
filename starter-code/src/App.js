import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Navbar from "./components/Navbar"
import Beer from "./components/beer"
import BeerRandom from "./components/BeerRandom";
import Newbeer from "./components/Newbeer";
import BeerDetail from "./components/BeerDetail"


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beer" component={Beer} />
          <Route path="/beer/:id" component={BeerDetail} />;
          <Route exact path="/random" component={BeerRandom} />
          <Route exact path="/newbeer" component={Newbeer} />
        </Switch>
      </div>
    );
  }
}

export default App;

