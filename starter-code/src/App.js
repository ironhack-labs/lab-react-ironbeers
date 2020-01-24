import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';

import ListBeers from './Components/ListBeers';
import SingleBeer from './Components/SingleBeer';
import NewBeerForm from './Components/NewBeerForm';

import Home from './Components/Home';
import axios from 'axios';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      randomBeer: {},
    };
    this.getRandomBeer = this.getRandomBeer.bind(this)
  }

  componentDidMount = async () => {
    try {
      const beerList = await axios.get(
        'https://ih-beers-api2.herokuapp.com/beers'
      );
      this.setState({
        beers: beerList.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  getRandomBeer() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((response) => {
        this.setState({
          randomBeer: response,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={ListBeers} />
          <Route
            exact
            path="/random-beer"
            render={(props) => {
              return (
                <SingleBeer getRandomBeer={this.getRandomBeer} randomBeer={this.state.randomBeer} {...props} />
              );
            }}
          />
          <Route exact path="/new-beer" component={NewBeerForm} />
        </Switch>
      </div>
    );
  }
}
