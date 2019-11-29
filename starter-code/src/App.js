import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import axios from "axios";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import BeersList from "./components/BeersList";
import Beer from './components/Beer'
import NewBeer from './components/NewBeer'

class App extends Component {
  render() {
    return (
      <div className="App">


     <Switch> 
      <Route exact path='/' component={Home}/>
      {/* a div, but not added to the DOM: */}
      <> 
      <NavBar />
      <Route exact path='/beers' component={BeersList}/>
      <Route exact path='/beers/:beerId' component={Beer} />
      <Route exact path='/random-beer' component={Beer} />
      <Route exact path='/new-beer' component={NewBeer}/>
      </>
    </Switch>


      </div>
    );
  }
}

export default App;
