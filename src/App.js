import React, { Component } from 'react';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AllBeers from './components/AllBeers/AllBeers';
import SingleBeer from './components/SingleBeer/SingleBeer';
import NewBeer from './components/NewBeer/NewBeer';
import { getAllBeers, getRandomBeer } from './services/BeersService';
import RandomBeer from './components/RandomBeer/RandomBeer';

export default class App extends Component {
  state = {
    beersList: [],
    randomBeer: [],
  };

  componentDidMount = () => {
    this.fetchData();
  };

  fetchData = () => {
    getAllBeers()
      .then((beersList) => {
        this.setState({ beersList });
        return console.log('list on Mount', this.state.beersList);
      })
      .catch((error) => console.log(error));
    getRandomBeer()
      .then((randomBeer) => {
        this.setState({ randomBeer: randomBeer });
        return console.log('on mount random', this.state.randomBeer);
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route
              exact
              path="/beers"
              render={(props) => (
                <AllBeers {...props} beersList={this.state.beersList} />
              )}
            />
            <Route
              exact
              path="/random-beer"
              render={(props) => (
                <RandomBeer {...props} beer={this.state.randomBeer} />
              )}
            />
            <Route path="/new-beer" component={NewBeer} />
            <Route
              exact
              path="/beers/:beerId"
              render={(props) => <SingleBeer {...props} />}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
