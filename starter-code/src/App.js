import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import BeerList from "./pages/BeerList";
import BeerDetail from "./pages/BeerDetail";
import AddBeer from "./pages/AddBeer";
import RandomBeer from "./pages/RandomBeer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

import Navbar from "./components/Navbar";

// import Profile from "./pages/Profile";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/signup" component={Signup}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/" component={Homepage}></Route>
          <Route exact path="/beers" component={BeerList}></Route>
          <Route exact path="/beers/new" component={AddBeer}></Route>
          <Route exact path="/beers/random" component={RandomBeer}></Route>
          <Route exact path="/beers/:id" component={BeerDetail}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
