import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import Beers from "../Beers/beers";
import Home from "../Home/home";
import Beer from "../Beers/beer";
import NewBeer from "../newBeer/newBeer";



class Principal extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/all-beers' component={Beers}/>
          <Route exact path='/' component={Home} />
          <Route exact path='/viewBeer/:id/:random' component={Beer}/>
          <Route exact path='/new-beer' component={NewBeer}/>
        </Switch>
      </div>
    );
  }
}

export default Principal;
