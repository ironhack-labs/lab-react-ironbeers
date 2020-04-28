import React, { Component } from 'react';
import './App.css';
import HomePage from './views/HomePage'
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Link, Switch, withRouter } from "react-router-dom";
import Header from './components/Header'
import BeerList from './views/BeerList';
import RandomBeer from './views/RandomBeer';
import NewBeer from './views/NewBeer';
import SingleBeer from './views/SingleBeer';


class App extends Component {
  render() {
    return (
      <div className="App">
       
        <Router>
          <Header/>
          <Switch>
            <Route
              path="/beers/:idBeer"
              children={(props) => <SingleBeer beerId={props.match.params.idBeer}/>}
            />
            <Route
              path="/beers"
              children={() => <BeerList />}
            />
            <Route
              exact
              path="/random-beer"
              children={() => <RandomBeer />}
            />
            <Route
              exact
              path="/new-beer"
              children={() => <NewBeer />}
            />
            <Route
              path="/"
              children={() => <HomePage />}
              // component = {HomePage}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
