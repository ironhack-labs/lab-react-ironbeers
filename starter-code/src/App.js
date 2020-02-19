import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";
import Home from './Home'
import AllBeers from "./AllBeers";
import RandomBeer from "./RandomBeer";
import NewBeer from "./NewBeer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-light bg-warning mb-3">
          <a class="navbar-brand" href="/">
            IronBeers
          </a>

          <ul className='navbar'>
            <Link
              className="nav-item"
              to={`/AllBeers`}
              style={{ marginRight: "5vw" }}
            >
              All Beers
            </Link>

            <Link
              className="nav-item"
              to={`/RandomBeer`}
              style={{ marginRight: "5vw" }}
            >
              Random Beer
            </Link>

            <Link
              className="nav-item"
              to={`/NewBeers`}
              style={{ marginRight: "5vw" }}
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
            render={props => <AllBeers {...props} />}
          />
          <Route
            exact
            path="/RandomBeer"
            render={props => <RandomBeer {...props} />}
          />
          <Route
            exact
            path="/NewBeer"
            render={props => <NewBeer {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
