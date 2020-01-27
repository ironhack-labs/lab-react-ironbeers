import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from '../NavBar/Navbar';
import BeersList from '../BeersList/BeersList';
import SingleBeer from '../SingleBeer/SingleBeer';
import NewBeerForm from '../NewBeerForm/NewBeerForm';
import Home from '../Home/Home';
import './App.css';
import axios from 'axios';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      randomBeer: {},
    };
    this.getRandomBeer = this.getRandomBeer.bind(this);
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
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={BeersList} />
          <Route
            exact
            path="/random-beer"
            render={(props) => {
              return (
                <SingleBeer
                  getRandomBeer={this.getRandomBeer}
                  randomBeer={this.state.randomBeer}
                  {...props}
                />
              );
            }}
          />
          <Route exact path="/new-beer" component={NewBeerForm} />
        </Switch>
      </div>
    );
  }
}
