import React, { Component } from "react";
import axios from "axios";
import { Switch, Link, Route } from "react-router-dom";
import Beers from "./Beers";
import NewBeer from "./NewBeer";
import Random from "./Random";
import TheBeer from "./TheBeer";

const data = "https://ih-beers-api2.herokuapp.com/beers";
export default class App extends Component {
  state = {
    beers: [],
  };
  componentDidMount = () => {
    axios.get(data).then(allb => this.setState({ beers: allb.data }));
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
          <Route path="/random" component={Random} />
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
