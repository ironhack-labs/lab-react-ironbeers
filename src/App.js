import React from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import Homepage from './components/Homepage';
import Header from './components/Header';
import ListBeers from './components/ListBeers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import BeerDetails from './components/BeerDetails';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" render={(props) => <Homepage {...props} />} />
          <Route
            exact
            path="/beers"
            render={(props) => <ListBeers {...props} />}
          />
          <Route
            exact
            path="/new-beer"
            render={(props) => <NewBeer {...props} />}
          />
          <Route
            exact
            path="/random-beer"
            render={(props) => <RandomBeer {...props} />}
          />
          <Route
            exact
            path="/beers/:id"
            render={(props) => <BeerDetails {...props} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
