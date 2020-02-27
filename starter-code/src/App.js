import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import "bulma/css/bulma.css";
import ListBeers from "./ListBeers/ListBeers";
import Home from "./Home/Home";
import RandomBeer from "./RandomBeer/RandomBeer";
import NewBeer from "./NewBeer/NewBeer";
import SingleBeer from "./SingleBeer/SingleBeer";

class App extends Component {
  state = {
    beers: [],
    beer: []
  };
  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then(beers => {
      this.setState({
        beers: beers.data
      });
    });
    this.getRandomBeer();
  }
  getRandomBeer() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers/random").then(beer => {
      this.setState({
        beerRandom: beer.data
      });
    });
  }
  getById(id) {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`).then(beer => {
      console.log(beer.data);
      this.setState({
        beer: beer.data
      });
    });
  }
  addBeer(e) {
    console.log(e);
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route
            exact
            path="/beers"
            beers={this.state.beers}
            render={() => (
              <ListBeers
                onlyOneBeer={id => this.getById(id)}
                beers={this.state.beers}
              />
            )}
          ></Route>
          <Route
            exact
            path="/random-beer"
            render={() => <SingleBeer beer={this.state.beerRandom} />}
          ></Route>
          <Route
            exact
            path="/new-beer"
            render={() => <NewBeer addBeeer={e => this.addBeer(e)} />}
          ></Route>
          <Route
            exact
            path="/beers/:id"
            render={() => <SingleBeer beer={this.state.beer} />}
          ></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
