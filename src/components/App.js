import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Home from './Home/Home'
import Header from './Header/Header'
import Beers from './Beers/Beers'
import BeerDetail from './Beers/BeerDetail'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/beers" render={() => <Beers />} />
        <Route path="/beers/:id" render={(props) => <BeerDetail {...props} />}/>
      </Switch>
    </div>
  );
}

export default App;
