import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import axios from "axios";

import Home from "./Components/Home/Home";
import AllBeers from "./Components/AllBeers/AllBeers.jsx";
import Random from "./Components/Random/Random";
import NewBeer from "./Components/NewBeer/NewBeer";
import SingleBeer from "./Components/SingleBeer/SingleBeer";

import "./App.css";

class App extends Component {
  state = {
    allBeers: {},
    random: {}
  };

  componentDidMount() {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers`).then(res => {
      const beers = res.data;
      this.setState({ allBeers: beers });
    });
  }
  render() {
    // console.log(this.state.allBeers);
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={props => <Home {...props} />} />
          <Route
            exact
            path="/beers"
            render={props => (
              <AllBeers {...props} allBeers={this.state.allBeers} />
            )}
          />
          <Route
            exact
            path="/beers/random-beer"
            render={props => (
              <Random {...props} allBeers={this.state.allBeers} />
            )}
          />
          <Route
            exact
            path="/beers/new-beer"
            render={props => <NewBeer {...props} />}
          />
          <Route
            exact
            path="/beers/:id"
            render={props => (
              <SingleBeer {...props} allBeers={this.state.allBeers} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
