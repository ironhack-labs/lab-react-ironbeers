import React, { Component } from "react";
import "./App.css";
import List from "./components/List/List";
import Single from "./components/Single/Single";
import Random from "./components/Random/Random";
import AddNewBeer from "./components/AddNewBeer/AddNewBeer";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import axios from "axios";

class App extends Component {
  state = {
    theBeers: null,
    showHeader: true,
    ready: false
  };

  componentDidMount() {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then(theResults => {
        let x = theResults.data;
        this.setState({
          theBeers: x,
          ready: true
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() { 
    if (this.state.ready) {
      return (
        <div className="App">
          <Switch>

            <Route exact path="/" component={Header} />
            <Route
              exact
              path="/list/"
              render={props => (
                <List {...props} listOfBeers={this.state.theBeers} />
              )}
            />
            <Route
              exact
              path="/single/:id"
              render={props => (
                <Single {...props} listOfBeers={this.state.theBeers} />
              )}
            />
            <Route
              exact
              path="/random/"
              render={props => (
                <Random {...props} listOfBeers={this.state.theBeers} />
              )}
            />
            <Route exact path="/new/" component={AddNewBeer} />
          </Switch>
        </div>
      );
    } else {
      return <h1>Loading....</h1>;
    }
  }
}

export default App;
