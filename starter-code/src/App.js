import React, { Component } from "react";
import axios from "axios";
import { Switch, Link, Route } from "react-router-dom";
import Beers from "./Beers";
import NewBeer from "./NewBeer";
import Random from "./Random";

export default class App extends Component {
  componentDidMount() {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then(allBeers => {
        console.log(allBeers);
      });
  }
  render() {
    return (
      <React.Fragment>
        <nav>
          <Link to="/beers">
            <button className="btn btn-info">All Beers</button>
          </Link>{" "}
          <Link to="/random">
            <button className="btn btn-info">Random Beer</button>
          </Link>{" "}
          {" "}
          <Link to="/newbeer">
            <button className="btn btn-success">Create a new Beer</button>
          </Link>{" "}
          {" "}
        </nav>
        <Switch>
          <Route path="/beers" component={Beers} />
          <Route path="/random" component={Random} />
          <Route path="/newbeer" component={NewBeer} />
        </Switch>
      </React.Fragment>
    );
  }
}
