import React, { Component } from "react";
import "./App.css";
import HomePage from "./Components/HomePage";
import { Switch, Route } from "react-router-dom";
import BeersList from "./Components/BeersList";
import SingleBeer from "./Components/SingleBeer";
import RandomBeer from "./Components/RandomBeer";
import NewBeer from "./Components/NewBeer";
import axios from "axios";

class App extends Component {
  constructor(){
    super()
    this.state={
      beerSel:[]
    }
  }
  setBeer(data){

    let beer = data.data
    console.log(beer)
    this.setState = ({
      ...this.state,
      beerSel: beer
    })
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <HomePage></HomePage>;
            }}
          />
          <Route
            exact
            path="/beers"
            render={() => {
              return <BeersList></BeersList>;
            }}
          />
          <Route
            exact
            path="/beers/:beerId"
            render={(props) => {
              let beerID = props.match.params.beerId;
              return <SingleBeer beer={props.match.params.beerId}></SingleBeer>
            }}
          />
          <Route
            exact
            path="/random-beer"
            render={() => {
              return <RandomBeer></RandomBeer>;
            }}
          />
          <Route
            exact
            path="/new-beer"
            render={() => {
              return <NewBeer></NewBeer>;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
