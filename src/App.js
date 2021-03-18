import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/navbar.jsx';
import HomePage from './components/homePage.jsx';
import Beers from './components/beers.jsx';
import RandomBeer from './components/randomBeer.jsx';
import NewBeer from './components/newBeer.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <HomePage exact path="/" component={HomePage} exact />
          <Route path="/all-beers" component={Beers} exact />
          <Route path="/random-beer" component={RandomBeer} exact />
          <Route path="/new-beer" component={NewBeer} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
