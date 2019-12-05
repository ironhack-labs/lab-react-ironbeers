import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Home/Home.js";
import BeerList from "./BeerList/BeerList";
import BeerDetail from "./BeerDetail/BeerDetail";
import Header from "./Header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Home></Home>;
            }}
          />
          <Route
            exact
            path="/beers"
            render={() => {
              return <React.Fragment><Header></Header><BeerList></BeerList></React.Fragment>;
            }}
          />
          <Route
            exact
            path="/random-beer"
            render={() => {
              return <React.Fragment><Header></Header><BeerDetail beer={"una birra random"}></BeerDetail></React.Fragment>;
            }}
          />
          <Route 
            exact
            path="/new-beer"
            render={() => {
              return <React.Fragment><Header></Header><h1>Una birra 404</h1></React.Fragment>;
            }}
          />
          <Route
            exact
            path="/beers/:id"
            render={props => {
              let beerId = props.match.params.id;
              return <React.Fragment><Header></Header><BeerDetail beer={beerId}></BeerDetail></React.Fragment>;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
