import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import AllBeers from './components/AllBeers';
import { Switch, Route } from 'react-router-dom';
import BeerDetails from './components/BeerDetails';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import Home from './components/Home';

class App extends Component {
  state = {
    beers: [],
    beer: []
  };

  getAllBeers = () => {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => {
      this.setState({ beers: response.data });
    });
  }
  componentDidMount() {
    this.getAllBeers();
  }

  render() {
      return (
      <div className="App">
        <Switch>
        <Route exact path="/" component={Home} />
          <Route
            exact
            path="/beers"
            render={(props) => <AllBeers beers={this.state.beers} />}
          />
          <Route path="/beers/:id" component={BeerDetails} />
          <Route path="/random-beer" component={RandomBeer} />
          <Route path="/new-beer" render={(props) => <NewBeer refreshBeers={this.getAllBeers}  />} />
        </Switch>
        </div>
    );
  }
}

export default App;
