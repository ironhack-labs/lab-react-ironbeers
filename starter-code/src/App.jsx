import React, { Component } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  withRouter,
  Link
} from "react-router-dom";
import ListBeer from "./components/ListBeer";
import RandomBeer from "./components/RandomBeer";
import SingleBeer from "./components/SingleBeer";
import NewBeer from "./components/NewBeer";
import Home from "./components/Home";
import { load } from "./services/beers";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div>
            <Route path="/beers" component={ListBeer} />
            <Route path="/new-beer" component={NewBeer} />
            <Route path="/random-beer" component={RandomBeer} />
            <Route path="/single-beer/:beerId" component={SingleBeer} />
            

            <Route exact path="/" component={Home} />
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
