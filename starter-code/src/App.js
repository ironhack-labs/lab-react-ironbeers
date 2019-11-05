import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

// Pages
import Home from "./components/Home";
import Beers from "./components/Beers";
import RandomBeer from "./components/RandomBeer";
import BeersDetails from "./components/BeersDetails";
import NewBeer from "./components/NewBeer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} />
          <Route path="/beers/:_id" component={BeersDetails} />
          <Route path="/random-beer" component={RandomBeer} />
          <Route path="/new-beer" component={NewBeer} />

          {/* <Route path="/new-beer" component={NewBeer} /> */}

          {/* <Route path='/shoes/color' component={About}/> */}
        </Switch>
      </div>
    );
  }
}

export default App;
