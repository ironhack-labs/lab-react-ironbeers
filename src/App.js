import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Home from './components/Home';
import Beers from './components/beers/Beers';
import Details from './components/Details';
import Random from './components/Random';
import Newbeer from './components/NewBeer';

export class App extends Component {
  state = {
    listOfBeers: [],
  };

  componentDidMount() {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((allBeers) => {
        this.setState({ listOfBeers: allBeers.data });
        console.log(this.state.listOfBeers);
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} />
          <Route
            exact
            path="/beers/:id"
            component={Details}
            allBeers={this.state.listOfBeers}
          />
          <Route exact path="/random" component={Random} />
          <Route exact path="/new-beer" component={Newbeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
