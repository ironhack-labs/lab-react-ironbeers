import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import axios from "axios";
import Home from "./Home";
import RandomBeer from './RandomBeer';
import AllBeer from './AllBeer';
import Beer from './Beer';
import NewBeer from './NewBeer';

class App extends Component {
  state={
    beers: [],
  }

  componentDidMount(){
        axios.get("https://ih-beers-api2.herokuapp.com/beers").then((allbeers) => {
          this.setState({
            ...this.state,
            beers: allbeers.data,
          });
        });
    }  

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <div>
                  <Home></Home>
                </div>
              );
            }}
          />
          <Route
            exact
            path="/beers"
            render={() => {
              return (
                <div>
                  <AllBeer></AllBeer>
                </div>
              );
            }}
          />
          <Route
            exact
            path="/random-beer"
            render={() => {
              return (
                <div>
                  <RandomBeer></RandomBeer>
                </div>
              );
            }}
          />
          <Route
            exact
            path="/new-beer"
            render={() => {
              return (
                <div>
                  <NewBeer></NewBeer>
                </div>
              );
            }}
          />
           <Route
            exact
            path="/:id"
            render={(props) => {
              let beerId = props.match.params.id;
              let beerChosen = [...this.state.beers];
              beerChosen = beerChosen.filter(beer => beer._id === beerId)[0];
              console.log(beerChosen)
              return (
                    <Beer {...beerChosen}></Beer>
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
