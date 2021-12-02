import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../pages/index/Home';
import BeersService from '../../services/beers.service';
import BeersList from '../pages/BeersList/BeersList';
import RandomBeer from '../pages/BeersList/RandomBeer';
import SingleBeer from '../pages/BeersList/SingleBeer';
import Header from '../layout/Header';

class App extends Component {
  constructor() {
    super();

    this.state = {
      beers: [],
    };

    this.service = new BeersService();
  }

  componentDidMount() {
    this.service.getAllBeers().then((res) => {
      this.setState({ beers: res.data });
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route
            path="/beers"
            exact
            render={() => <BeersList beers={this.state.beers} />}
          />
          <Route exact path="/random-beer" render={() => <RandomBeer />} />
          <Route
            path="/beers/:id"
            render={(props) => <SingleBeer {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
