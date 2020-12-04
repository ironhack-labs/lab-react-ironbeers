import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import Home from './components/Home';
import OneBeer from './components/OneBeer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      
      <Switch>
      <Route exact path="/" component={Home} />
        <Fragment>
          <Header />
          <Route path="/beers" component={Beers} />
          <Route path="/random-beer" component={RandomBeer} />
          <Route path="/new-beer" component={NewBeer} />
          <Route path="/:id" component={OneBeer} />{' '}
        </Fragment>
      </Switch>
    </div>
  );
}

export default App;
