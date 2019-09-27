import React, { Component } from "react";
// import axios from "axios";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NewBeer from "./components/NewBeer";
import RandomBeer from "./components/RandomBeer";
import Beers from "./components/Beers";
import Header from "./components/Header";

import "./App.css";
import SingleBeer from "./components/SingleBeer";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/beers" component={Beers} />
          <Route path="/single-beer/:beerId" component={SingleBeer} />
          <Route path="/new-beer" component={NewBeer} />
          <Route path="/random-beer" component={RandomBeer} />
        </Switch> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <>
            <Header />
            <Route exact path="/beers" component={Beers} />
            <Route exact path="/beers/:beerId" component={SingleBeer} />
            <Route exact path="/random-beer" component={RandomBeer} />
            <Route exact path="/new-beer" component={NewBeer} />
          </>
        </Switch>
      </div>
    );
  }
}

export default App;
