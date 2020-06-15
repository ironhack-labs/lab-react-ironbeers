import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import BeerDetail from './components/BeerDetail';

class App extends Component {
  state = {
    beers: [],
  };

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
      this.setState({ beers: response.data });
      console.log(response.data);
    });
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={Home} />
          <Route
            exact
            path="/beers"
            render={(props) => <Beers beers={this.state.beers} />}
          />
          <Route
            path="/beers/:i"
            render={(props) => <BeerDetail beers={this.state.beers} />}
          />
          <Route exact path="/random-beer" render={RandomBeer} />
          <Route exact path="/new-beer" render={NewBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
