import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Beers from './pages/Beers';
import OneBeer from './pages/OneBeer';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <main className="main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/beers" component={Beers} />
            <Route path="/random" component={RandomBeer} />
            <Route path="/new" component={NewBeer} />
            <Route path="/:id" component={OneBeer} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
