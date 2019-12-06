import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import Navigation from "./Navigation/Navigation";
import Beers from "./Beers/Beers";
import EachBeer from "./EachBeer/EachBeer";


class App extends Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then(res => res.json())
      .then(data => {
        this.setState({ beers: data });
        console.log(this.state.beers);
      })
      .catch(console.log("error"));
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <Switch>
            <Route
              exact
              path="/home"
              render={() => {
                return <Home></Home>;
              }}
            />
            <Route
              exact
              path="/beers"
              render={() => {
                return <Navigation><Beers beers={this.state.beers}></Beers>;</Navigation>
              }}
            />
          </Switch>
        </header>
      </div>
    );
  }
}

export default App;
