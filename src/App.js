import React from 'react';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ListBeers from './pages/ListBeers';
import SingleBeer from './pages/SingleBeer';
import NewBeer from './pages/NewBeer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Homepage} />
        <Route exact path="/list" component={ListBeers} />
        <Route exact path="/new" component={NewBeer} />
        <Route exact path="/beers/:beerId" component={SingleBeer} />
      </div>
    );
  }
}

export default App;
