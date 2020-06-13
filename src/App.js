import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './components/Home';
import Beers from './components/Beers';
import Detail from './components/Detail';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <div className="container">
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/beers" component={Beers}></Route>
        <Route exact path="/detail/:id" component={Detail}></Route>
        <Route path="/new-beer" component={NewBeer}></Route>
        <Route path="/random-beer" component={RandomBeer}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
