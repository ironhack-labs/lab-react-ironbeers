import React, { Component } from 'react';
import Nav from './components/Nav';
import Home from "./views/Home";
import Beers from "./views/Beers";
import NewBeer from "./views/NewBeer";
import RandomBeer from "./views/RandomBeer";
import BeerPage from "./views/BeerPage";
import { Switch, Route } from "react-router-dom";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">



        <Nav />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/beers" component={Beers} />
            <Route path="/new-beer" component={NewBeer} />
            <Route path="/random-beer" component={RandomBeer} />
            <Route path="/beer/:id" component={BeerPage}></Route>

            {/* <Route path="*" component={NotFound} /> */}
          </Switch>
        </div>


      </div>
    );
  }
}

export default App;
