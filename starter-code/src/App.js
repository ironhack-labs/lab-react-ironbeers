import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import axios from "axios";
import BeerDetails from "./BeerDetails";
import Home from "./Home";
import AllBeers from "./AllBeers";
import RandomBeer from "./RandomBeer";
import NewBeer from "./NewBeer";
import logo from "./logo.svg";
// import SHA256 from "crypto-js";

class App extends Component {
  state = {
    beers : [],
    ready : false,
  };

  componentDidMount() {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/`).then(res => {
      //This takes some time by the time it gets back
      this.setState({
        beers : res.data,
        ready : true
      });
    });
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-light bg-warning">
          <a className="navbar-brand" href="/">
            <img
              src={logo}
              // className="logo"
              alt="IronBrews"
              width="30"
              height="30"
              style={{ marginRight: "1vw" }}
              className="d-inline-block align-top"
            />
            IronBrewskis
          </a>

          <ul className="navbar">
            <Link
              style={{
                color: "#000000",
                textDecoration: "none",
                marginRight: "5vw",
                paddingTop: "10px"
              }}
              className="nav-item"
              to={`/AllBeers`}
            >
              All Beers
            </Link>

            <Link
              style={{
                color: "#000000",
                textDecoration: "none",
                marginRight: "5vw",
                paddingTop: "10px"
              }}
              className="nav-item"
              to={`/RandomBeer`}
            >
              Random Beer
            </Link>

            <Link
              style={{
                color: "#000000",
                textDecoration: "none",
                marginRight: "5vw",
                paddingTop: "10px"
              }}
              className="nav-item"
              to={`/NewBeer`}
            >
              New Beer
            </Link>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" render={props => <Home {...props} />} />
          <Route
            exact
            path="/AllBeers"
            render={props => <AllBeers beers={this.state.beers} {...props} />}
          />
          <Route
            exact
            path="/RandomBeer"
            render={props => <RandomBeer {...props} />}
          />
          <Route
            exact
            path="/NewBeer"
            render={props => <NewBeer beers={this.state.beers} {...props} />}
          />
          <Route
            exact
            path="/BeerDetails/:beerId"
            render={props => (
              <BeerDetails beers={this.state.beers} {...props} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;