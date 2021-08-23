import React, { Component } from 'react';
import axios from 'axios';
import { Switch, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import BeerList from './components/BeerList';
import BeerDetails from './components/BeerDetails';

export default class App extends Component {
  state = {
    beerList: [],
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
        this.setState({
          beerList: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/beers">
          <BeerList beers={this.state.beerList} />
        </Route>
        <Route
          path="/beers/beer:id"
          render={(routeProps) => {
            const requestedBeer = this.state.beerList.find((beer) => {
              return beer._id === routeProps.match.params.id;
            });
            return <BeerDetails {...requestedBeer} />;
          }}
          exact
        />
      </switch>
    );
  }
}
