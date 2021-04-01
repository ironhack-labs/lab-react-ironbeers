import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/Header';
import Beers from './components/Beers/Beers';
import Home from './components/Home/Home';
import Beer from './components/Beer/Beer';
import RandomBeer from './components/RandomBeer/RandomBeer';
import NewBeer from './components/NewBeer/NewBeer';

function App() {
  return (
      <div className="App">
        <Header />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/beers' component={Beers} />
          <Route exact path='/beer/:id' component={Beer} />
          <Route exact path='/random-beer' component={RandomBeer} />
          <Route exact path='/new-beer' component={NewBeer} />
        </Switch>

      </div>
  );
}

export default App;
