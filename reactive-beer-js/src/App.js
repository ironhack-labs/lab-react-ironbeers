import React, {Component} from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import ListBeers from "./ListBeers";
import RandomBeer from "./RandomBeer";
import NewBeer from "./NewBeer";
import SingleBeer from "./SingleBeer";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/beer/:id" component={SingleBeer} />
          <Route exact path="/all" component={ListBeers} />
          <Route exact path="/random" component={RandomBeer} />
          <Route exact path="/new" component={NewBeer} />
        </Switch>
      </React.Fragment>
    );
  }
}
