import React, { Component } from 'react';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AllBeers from './components/AllBeers/AllBeers';
import SingleBeer from './components/SingleBeer/SingleBeer';
import NewBeer from './components/NewBeer/NewBeer';
import { getAllBeers } from './services/BeersService';

export default class App extends Component {
  state = {
    beersList: [],
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
            {/* <Route path="/random-beer" component={SingleBeer} /> */}
            <Route path="/new-beer" component={NewBeer} />
            <Route
              exact
              path="/beers/:beerId"
              render={(props) => (
                <SingleBeer {...props} singleBeer={this.state.singleBeer} />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
