import React, { Component } from 'react';
import Home from './components/Home/Home';
import { Route, Switch } from 'react-router-dom';
import BeerList from './components/BeerList/BeerList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/beers" component={ BeerList } />
        <Route path="/beers/:id" component={ Home }/>
        <Route path="/random-beer" component={ Home } />
        <Route path="new-beer" component={ Home } />
      </Switch>
    );
  }
}

export default App;
