import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import AllBeers from './components/AllBeers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to IronBeers
          </p>
          <nav>
            <ul>
              <li>
                <Link to="/beers">All Beers</Link>
              </li>
              <li>
                <Link to="/random-beer">Random Beer</Link>
              </li>
              <li>
                <Link to="/new-beer">New Beer</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/beers" component={AllBeers} />
          <Route path="/random-beer" component={RandomBeer} />
          <Route path="/new-beer" component={NewBeer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
