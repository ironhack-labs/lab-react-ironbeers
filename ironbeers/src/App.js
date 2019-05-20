import React, { Component } from "react";
import "./App.css";
import Router from "./Router";
import { getBeers } from "./services/beers";

class App extends Component {
  state = {
    beers: [],
    beer: {},
    error: {}
  };

  componentDidMount() {
    getBeers()
      .then(beers => {
        this.setState({ beers });
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  render() {
    const {beers} = this.state
    return (
      <div className="App">
        <Router beers={beers}/>
      </div>
    );
  }
}

export default App;
