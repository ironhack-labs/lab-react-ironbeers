import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom";

import Home from "./views/Home";
import Beers from "./views/Beers";
import RandomBeer from "./views/RandomBeer";
import NewBeer from "./views/NewBeer";
import NotFound from "./views/NotFound";
import BeerDetails from "./views/BeerDetails";
import axios from "axios"; 

import "./App.css";



export default class App extends Component {
  state = {
    beers: [],
  };
 

  componentDidMount() {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then(Res => {
        this.setState({ beers: Res.data});
        console.log(this.state.beers)
      })
      .catch(apiErr => console.error(apiErr));
  }





  render() {
    return (
      <div className="App">
      <Switch>
        {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
        <Route exact path="/" component={Home} />
        <Route exact path="/Beers" render = {(props => <Beers beers={this.state.beers}/>)} />
        <Route path="/Beers/:id" component={BeerDetails} />
        <Route path="/RandomBeer" component={RandomBeer} />
        <Route path="/NewBeer" component={NewBeer} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
    )
  }
}

