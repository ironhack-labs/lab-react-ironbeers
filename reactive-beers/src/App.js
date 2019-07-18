import React from "react";
import BeersList from "./components/BeersList";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import BeerDetails from "./components/BeerDetails";
import { Link, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        <ul>
          <li>
            <Link to="/beers">View all beers</Link>
          </li>
          <li>
            <Link to="/random-beer">View a random beer</Link>
          </li>
          <li>
            <Link to="/new-beer">Add a new beer</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/beers" component={BeersList} />
          <Route path="/beers/:id" component={BeerDetails} />
          <Route exact path="/random-beer" component={RandomBeer} />
          <Route exact path="/new-beer" component={NewBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
