import React, { Component } from "react";
import "./App.css";
import AllBeers from "./pages/AllBeers";
import NewBeer from "./pages/NewBeer";
import OneBeer from "./pages/OneBeer";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  state = {
    beers: undefined,
    loaded: false,
    beerPromise: axios.get("https://ih-beers-api2.herokuapp.com/beers"),
    random: undefined,
    randomTime: undefined,
    updateTime: Date.now(),
    newestBeer: undefined,
  };
  componentDidMount() {
    this.state.beerPromise.then((apiRes) => {
      this.setState({
        beers: apiRes.data,
        loaded: true,
        random: apiRes.data[Math.floor(Math.random() * apiRes.data.length)],
        randomTime: Date.now(),
        updateTime: Date.now(),
      });
    });
  }

  getRandom() {
    // SORRY FOR THIS HACKY-ASS BUG FIX 👇
    // ITS TO BREAK INFINITE LOOPS
    if (Date.now() > this.state.randomTime + 100) {
      this.setState({
        random: this.state.beers[
          Math.floor(Math.random() * this.state.beers.length)
        ],
        randomTime: Date.now(),
      });
    }
    return this.state.random;
  }

  getBeer = (beerId) => {
    if (!this.state.loaded) {
      return undefined;
    } else {
      return this.state.beers.find((beer) => beer._id === beerId);
    }
  };

  updateBeers() {
    if (Date.now() > this.state.updateTime + 1000) {
      this.setState({
        newestBeer: undefined,
        updateTime: Date.now(),
      });
      axios.get("https://ih-beers-api2.herokuapp.com/beers").then((apiRes) => {
        this.setState({
          beers: apiRes.data,
          newestBeer: apiRes.data[apiRes.data.length - 1],
        });
      });
    }
    return this.state.newestBeer;
  }

  render() {
    return (
      <Router>
        <Nav />
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              render={(props) => (
                <AllBeers {...props} beers={this.state.beers} />
              )}
              path="/all"
            />
            <Route
              exact
              path="/new"
              render={(props) => <NewBeer {...props} />}
            />
            <Route
              render={(props) => (
                <OneBeer
                  {...props}
                  beer={this.getBeer(props.match.params.id)}
                />
              )}
              path="/beer/:id"
            />
            <Route
              render={(props) => <OneBeer {...props} beer={this.getRandom()} />}
              path="/random"
            />
            <Route
              render={(props) => (
                <OneBeer {...props} beer={this.updateBeers()} />
              )}
              path="/newest"
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
