import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Beers from './components/Beers/Beers';
import RandomBeer from './components/RandomBeer/RandomBeer';
import NewBeer from './components/NewBeer/NewBeer';
import BeerDetail from './components/BeerDetail/BeerDetail';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/beers" component={Beers}/>
        <Route exact path="/beer/:beerId" component={BeerDetail}/>
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" render={e => <NewBeer/>} />
      </Switch>
      </div>
    );
  }
}

export default App;
