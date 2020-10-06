import React from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import AllBeers from './components/AllBeers';
import RandomBeer from './components/RandomBeer';
import SingleBeer from './components/SingleBeer';
import NewBeer from './components/NewBeer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <header>
        <NavBar />
      </header>
      <section className="container">
        <div className="row">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/beers" component={AllBeers} />
            <Route exact path="/beers/:beerId" component={SingleBeer} />
            <Route exact path="/new-beer" component={NewBeer} />
            <Route exact path="/random-beer" component={RandomBeer} />
            <Redirect to="/home" />
          </Switch>
        </div>
      </section>
      <footer>React IronBeers</footer>
    </div> 
  );
} 
export default App; 