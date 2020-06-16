import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import AllBeers from './components/AllBeers';
import { Switch, Route, Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import BeerDetails from './components/BeerDetails';
// import RandomBeer from './components/RandomBeer';
// import NewBeer from './components/NewBeer';

class App extends Component {
  state = {
    beers: [],
    beer: []
  };

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
      this.setState({ beers: response.data });
    });
  }

  render() {
      return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/beers"
            render={(props) => <AllBeers beers={this.state.beers} />}
          />
          <Route path="/beers/:id" render={(props) => <BeerDetails beer={this.state.beer} />} />

        </Switch>
        <div>
          <NavLink to="/beers">All Beers</NavLink>
        </div>
        <div>
          <NavLink to="/random-beer">Random Beer</NavLink>
        </div>
        <div>
          <NavLink to="/new-beer">New Beers</NavLink>
        </div>
      </div>
    );
  }
}

export default App;
