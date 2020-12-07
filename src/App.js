import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Route, Link, Switch } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Beers from './components/BeerList/Beers';
import NewBeer from './components/NewBeer/NewBeer';
import RandomBeer from './components/RandomBeer/RandomBeer';
import SingleBeer from './components/SingleBeer/SingleBeer';

/*set the initial state to null*/

class App extends React.Component {
  state = {
    beers: null,
  };
  /*Then we make the get request to the api using axios, once we have a response we can then re set the state to this data */
  componentDidMount = () => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers`).then((res) => {
      // console.log('res:', res);
      this.setState({
        beers: res.data,
      });
    });
  };

  render() {
    console.log('list of beer', this.state.beers);

    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <HomePage {...props} beerDetails={this.state.beers} />
            )}
          />
          <Route
            exact
            path="/beers"
            render={(props) => <Beers {...props} beers={this.state.beers} />}
          />
          <Route
            exact
            path="/random-beer"
            render={(props) => (
              <RandomBeer {...props} randomBeer={this.state.beers} />
            )}
          />
          <Route
            exact
            path="/new-beer"
            render={(props) => (
              <NewBeer {...props} newBeer={this.state.beers} />
            )}
          />
          <Route
            exact
            path="/beers/:beerId"
            render={(props) => (
              <SingleBeer {...props} beers={this.state.beers} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
