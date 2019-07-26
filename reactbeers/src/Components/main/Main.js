import React, { Component } from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import AllBeers from "../allbeers/AllBeers";
import RandomBeer from "../random/RandomBeer";
import AddBeer from "../addbeer/AddBeer";
import HomePage from "../homepage/HomePage"
import ModalComponent from "../modal/ModalComponent"

class Main extends Component {
  render() {
    return (
      <div>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/allBeers" component={AllBeers} />
            <Route exact path="/randomBeer" component={RandomBeer} />
            <Route exact path="/addBeer" component={AddBeer} />
            <Route exact path="/modal/:id" component={ModalComponent}/>
          </Switch>
        </div>
    );
  }
}

export default Main;
