import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import {HomePage} from './pages/HomePage'
import  ListBeers from "./pages/ListBeers";
import SingleBeer from "./pages/SingleBeer";
import RandomBeer  from "./pages/RandomBeer";
import  {NewBeer}  from "./pages/NewBeer";
import { Header } from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/list-beers" component={ListBeers} />
          <Route path="/beer/:id" component={SingleBeer} />
          <Route path="/random-beer" component={RandomBeer} />
          <Route path="/new-beer" component={NewBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
