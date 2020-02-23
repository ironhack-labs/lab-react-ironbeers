import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import axios from "axios";
import Home from "./home.js";
import Beers from "./beers.js";
import Randombeer from "./randombeer.js";
import Newbeer from "./newbeer.js";
import navbar from "./navbar.png";

import { Route, Link, BrowserRouter } from "react-router-dom";

class App extends React.Component {
  state = {
    beers: []
  };

  componentDidMount() {
    axios.get("https://ih-beers-api2.herokuapp.com/beers/").then(response => {
      console.log("API MANY RESPONSE: ", response);
      this.setState({
        beers: response.data
      });
    });
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then(randomResponse => {
        console.log("API RANDOM RESPONSE: ", randomResponse);
        this.setState({
          randombeers: randomResponse.data
        });
      });
  }

  render() {
    console.log("APP.js RENDER " + this.state.beers);
    return (
      <div>
        <BrowserRouter>
          <Link to="/">
            <img className="navbar-img-top" src={navbar} alt="navbar" />
          </Link>

          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/beers"
            render={() => <Beers beers={this.state.beers} />}
          />

          <Route
            exact
            path="/randombeer"
            render={() => <Randombeer randombeers={this.state.randombeers} />}
          />

          <Route
            exact
            path="/newbeer"
            render={() => <Newbeer beers={this.state.beers} />}
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
