import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Beers from "./components/Beers/Beers";
import RandomBeer from './components/RandomBeer/RandomBeer'
import { Switch, Route } from "react-router-dom";
import axios from "axios";

class App extends Component {
  state = {
    beers: []
  };

  getBeers = () => {
    const baseURL = "https://ih-beers-api2.herokuapp.com/beers";
    axios
      .get(baseURL)
      .then(beers => {
        this.setState({
          beers: beers.data
        });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.getBeers();
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/home" component={Home} />
          <Route
            path="/beers"
            render={(props) => <Beers {...props} beers={this.state.beers} />}
          />
          <Route
            path="/random"
            render={(props) => <RandomBeer {...props} beers={this.state.beers} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
