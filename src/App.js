import React from 'react';
import logo from './logo.svg';
import './App.css';
import Beers from './views/Beers';
import RandomBeer from './views/RandomBeer';
import NewBeer from './views/NewBeer';
import Home from './views/Home';
import OneBeer from './views/OneBeer';
import { Switch, Route } from 'react-router-dom';

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
      </header>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/beers" component={Beers}></Route>
        <Route exact path="/random-beer" component={RandomBeer}></Route>
        <Route exact path="/new-beer" component={NewBeer}></Route>
        <Route exact path="/beers/:id" component={OneBeer} />
      </Switch>
    </div>
  );
}
export default App;
