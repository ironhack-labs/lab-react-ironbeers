import React, { Component } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Beers from "./Components/Beers/Beers";
import BeerCard from "./Components/BeerCard/BeerCard";

class App extends Component {
  render() {
    return (
      <div className="App">
        {window.location.pathname !== "/" && <NavBar />}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} />
          <Route exact path='/beers/:beerId' component={BeerCard}/>
        </Switch>
      </div>
    );
  }
}

export default App;
