import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Beers from "./components/Beers";
import NewBeer from "./components/NewBeer";
import RandomBeer from "./components/RandomBeer";
import SingleBeer from "./components/SingleBeer";



class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        

          <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/beers' component={Beers}/>
          <Route path='/randombeer' component={RandomBeer}/>
          <Route path='/newbeer' component={NewBeer}/>
          <Route path='/beers/:beerId' component={SingleBeer}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
