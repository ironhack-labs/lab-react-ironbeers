import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from "./Home";
import Navbar from "./Navbar";
import AllBeers from "./AllBeers";
import RandomBeer from "./RandomBeer";
import NewBeer from "./NewBeer";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/beers" component={AllBeers}/>
          <Route exact path="/random-beer" component={RandomBeer}/>
          <Route exact path="/new-beer" component={NewBeer}/>
          <Route render={()=><Redirect to="/"/>}/>
        </Switch>
      </React.Fragment>
    )
  }
}
