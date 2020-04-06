import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import ListBeers from './pages/ListBeers';
import SingleBeer from './pages/SingleBeer';
import RandomBeer from './pages/RandomBeer';
import AddNewBeer from './pages/AddNewBeer';
import Nav from './components/Nav';
import { Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Nav component={Link} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/ListBeers" component={ListBeers} />
            <Route path="/SingleBeer/:beerId" component={SingleBeer} />
            <Route path="/RandomBeer" component={RandomBeer} />
            <Route path="/AddNewBeer" component={AddNewBeer} />
          </Switch>
        </header>
      </div>
    );
  }
}

export default App;
