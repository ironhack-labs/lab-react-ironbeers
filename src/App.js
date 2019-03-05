import React, { Component } from 'react';
import './App.css';

import { Switch, Route, Redirect } from 'react-router-dom';
import { listBeers } from './services/BeersService';

import NavBar from './components/misc/NavBar';
import Home from './components/Home';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import Beer from './components/Beer';

class App extends Component {

  render() {

    const BeerFound = (props) => {
      return listBeers()
        .then(response => {
          const beer = response.data.find(beer => String(beer._id) === props.match.params.id);
          return <Beer {...beer} />
      }, (error) => {
        return (<h2>Oops, it's a error: {error}</h2>)
      });
    }

    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/beers" component={Beers} />
          <Route exact path="/beers/:id" component={BeerFound} />
          <Route exact path="/random-beer" component={RandomBeer} />
          <Route exact path="/new-beer" component={NewBeer} />
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

export default App;
