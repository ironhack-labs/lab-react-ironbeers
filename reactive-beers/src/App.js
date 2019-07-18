import React from "react";
import BeersList from "./components/BeersList";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import { Link, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        <Switch>
          <Route exact path="/beers" component={BeersList} />
          <Route exact path="/random-beer" component={RandomBeer} />
          <Route exact path="/new-beer" component={NewBeer} /> 
        </Switch>
      </div>
    );
  }
}

export default App;
