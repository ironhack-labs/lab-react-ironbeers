import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import axios from "axios";
import NavBar from "./navbar/NavBar";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Beers from "./pages/beers/Beers";
import BeerDetails from "./beerdetails/BeerDetails"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => this.setState({beers: response.data}))
      .catch((err) => console.log(err))
  }

  render() {
    return (
      <>
        <NavBar />
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/beers" render={() => <Beers beersApi={this.state.beers} />} />
          <Route path="/details/:id" render={(props) => <BeerDetails {...props} />} />
        </Switch>
      </>
    );
  }
}

export default App;
