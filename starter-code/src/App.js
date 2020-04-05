import React, { Component } from "react";
import "./App.css";
import ListBeers from "./components/ListBeers";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import SingleBeer from "./components/SingleBeer";
import RandomBeer from "./components/RandomBeer";
import NewBeer from "./components/NewBeer";
import { Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <Link to="/RandomBeer" style={{ textDecoration: "none" }}>toRandomBeer</Link> */}
          <Switch>

            <Route exact path="/" component={ListBeers}/>
            <Route path="/RandomBeer" component={RandomBeer}/>
            <Route path="/NewBeer" component={NewBeer}/>
            <Route path="/:id" component={SingleBeer}/>


          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
