import React from 'react';
import './App.css';
import Home from './components/Home';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import Header from './components/Header';
import { BrowserRouter as Router, Link, Switch, Route, withRouter } from 'react-router-dom';

function App(props) {
  return (
    <div className="App">
      <div className="container">
        {props.location.pathname === '/' ? null : <Header />}

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/beers' component={Beers} />
          <Route path='/random-beer' component={RandomBeer} />
          <Route path='/new-beer' component={NewBeer} />
        </Switch>
      </div>
    </div>
  );
}

export default withRouter(App);
