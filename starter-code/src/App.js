import React, { Component } from "react";
import axios from "axios";
import { Switch, Link, Route } from "react-router-dom";
import Beers from "./Beers";
import NewBeer from "./NewBeer";
import Random from "./Random";
import TheBeer from "./TheBeer";

const [data, random_data, new_beer] = [
  "https://ih-beers-api2.herokuapp.com/beers",
  "https://ih-beers-api2.herokuapp.com/beers/random",
];

export default class App extends Component {
  state = {
    beers: [],
    random: {},
  };
  componentDidMount = () => {
    axios.get(data).then(allb => this.setState({ beers: allb.data }));
    axios.get(random_data).then(randomb => this.setState({ random: randomb }));
  };
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
          <Route
            exact
            path="/beers"
            render={props => <Beers {...props} beers={this.state.beers} />}
          />/>
          <Route
            exact
            path="/random"
            render={props => <Random {...props} theBeer={this.state.random} />}
          />/>
          <Route path="/newbeer" component={NewBeer} />
          <Route
            exact
            path="/beers/:thisID"
            render={props => <TheBeer {...props} beers={this.state.beers} />}
          />/>
        </Switch>
      </React.Fragment>
    );
  }
}
