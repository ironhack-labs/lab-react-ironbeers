import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {Link, Route, Switch} from 'react-router-dom';
import Beers from './components/Beers';
import Home from './components/Home';
import SingleBeer from './components/SingleBeer';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <Link exact to="/">
              Home
            </Link>   
          </nav>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} />
          <Route exact path="/beers/:id" component={SingleBeer}/>
          <Route path="/random" component={RandomBeer}/>
          <Route path="/newbeer" component={NewBeer}/>
        </Switch>
      </div>
    );
  }
}

export default App;
