import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Beers from "./Beers";
import RandomBeer from "./RandomBeer";
import NewBeer from "./NewBeer";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends Component {
  state = {
    beers: []
  };

  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then(allbeers => {
      this.setState({
        ...this.state,
        beers: allbeers.data
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} />
          <Route exact path="/random-beer" component={RandomBeer} />
          <Route exact path="/new-beer" component={NewBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
