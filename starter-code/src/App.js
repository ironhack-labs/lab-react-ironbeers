import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import ListBeers from './pages/ListBeers';
import SingleBeer from './pages/SingleBeer';
import RandomBeer from './pages/RandomBeer';
import AddNewBeer from './pages/AddNewBeer';
import Nav from './components/Nav';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/" component={ListBeers} />
            <Route path="/" component={SingleBeer} />
            <Route path="/" component={RandomBeer} />
            <Route path="/" component={AddNewBeer} />
          </Switch>
        </header>
      </div>
    );
  }
}

export default App;
