import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Link, Redirect } from "react-router-dom";
import axios from "axios";
import Beers from './Beers/Beers';
import RandomBeer from './RandomBeer/RandomBeer';
import NewBeer from './NewBeer/NewBeer';
import Home from './Home/Home'
import SingleBeer from './SingleBeer/SingleBeer';

class App extends Component {
  constructor(){
    super()

    this.state={
      beers:[]
    }
  }

  componentDidMount(){
    const URL = "https://ih-beers-api2.herokuapp.com/beers";
    axios.get(URL).then((beersPayLoad) => {
      this.setState({
        ...this.state,
        beers: beersPayLoad.data,
      });
    });

  }



  sendBeerToDetail(chosenBeer){
    console.log(chosenBeer)
    this.setState({
      chosenBeer: chosenBeer
    })
  }



  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/beers"
            render={() => {
              return <Beers beers={this.state.beers} sendBeerToDetail={(e)=>this.sendBeerToDetail(e)}></Beers>;
            }}
          />
          <Route
            exact
            path="/randombeer"
            render={() => {
              return <RandomBeer></RandomBeer>;
            }}
          />
          <Route
            exact
            path="/newbeer"
            render={() => {
              return <NewBeer></NewBeer>;
            }}
          />

          <Route
            exact
            path="/:beerId"
            render={() => {
              return <SingleBeer beer={this.state.chosenBeer} ></SingleBeer>;
            }}
          />

          <Route
            exact
            path="/"
            render={() => {
              return <Home></Home>;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
