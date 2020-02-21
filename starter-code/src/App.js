import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
// import home from "./views/home";
import GetTheBeers from "./components/GetTheBeers";
import RandomBeer from "./components/RandomBeer";
import OneBeer from "./components/OneBeer";
import NewBeer from "./components/NewBeer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
        
          <Route exact path="/" component={GetTheBeers} />
          <Route path="/random-beer" component={RandomBeer} />
          <Route path="/new-beer" component={NewBeer} />
          <Route path="/beer/:id" component={OneBeer} />
          
        </Switch>
      </div>
    );
  }
}

export default App;
