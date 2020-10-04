import React from 'react';
import NavBar from './components/NavBar';
import SingleBeer from './components/SingleBeer';
import AllBeers from './components/AllBeers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar/>
          <Switch>
            <Route exact path="/beers/:beerId" component={ SingleBeer } />
            <Route exact path="/beers" component={ AllBeers } />
            <Route exact path="/random-beer" component={ RandomBeer } />
            <Route exact path="/new-beer" component={ NewBeer } />
            <Route exact path="/" component={ Home } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
