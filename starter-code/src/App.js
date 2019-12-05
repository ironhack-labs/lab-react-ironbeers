import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/Home";
import List from "./components/List";
import NavBar from "./components/NavBar";
import OneBeer from "./components/OneBeer";
import RandomBeer from "./components/RandomBeer";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route
            exact
            path='/'
            render={() => {
              return <Home></Home>;
            }}
          />
          <Route
            exact
            path='/beers'
            render={() => {
              return <List></List>;
            }}
          />
          <Route
            exact
            path='/:beerID'
            render={(props) => {
              let chosenBeer = props.match.params.beerID;
              return <OneBeer beerID={chosenBeer}></OneBeer>;
            }}
          />
          <Route
            exact
            path='/random-beer'
            render={() => {
              return <RandomBeer></RandomBeer>;
            }}
          />
          <Route
            exact
            path='/new-beer'
            render={() => {
              return (
                  <NavBar></NavBar>
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
