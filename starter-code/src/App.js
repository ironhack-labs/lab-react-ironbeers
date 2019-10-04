import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import AllBeers from "./AllBeers";
import RandomBeer from './RandomBeer';
import axios from "axios";
import Home from "./Home";

class App extends Component {
  constructor() {
    super();
    this.state = {
      beers: [],
      
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/all").then(allBeers => {
      this.setState({
        ...this.state,
        beers: allBeers.data
      });
    });
  }

  // getRandomBeer() {
  //   axios.get("http://localhost:5000/random").then(randomBeer => {
  //     this.setState({
  //       ...this.state,
  //       random: randomBeer.data
  //     });
  //   });
  // }

  render() {
    // console.log(this.state.beers);
    return (
      <div className="App">
        
        <Switch>
          <Route exact path="/" render={()=>{return <Home></Home>}}></Route>
          <Route exact path="/AllBeers" render={()=>{return <AllBeers beers={this.state.beers}></AllBeers>}}></Route>
          <Route exact path="/randomBeer" render={()=>{return <RandomBeer beers={this.state.random}></RandomBeer>}}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
