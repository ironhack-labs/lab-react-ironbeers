import React from 'react';
import {Switch, Route} from 'react-router-dom';


import './App.css';
import Beers from './pages/Beers';
import Home from './pages/Home';
import NewBeer from './pages/NewBeer';
import SingleBeer from './pages/SingleBeer';
import RandomBeer from './pages/RandomBeer';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers}></Route>
        <Route exact path="/random-beer" component={RandomBeer}></Route>
        <Route exact path="/new-beer" component={NewBeer}></Route>
        <Route exact path="/single-beer/:id" component={SingleBeer}></Route>
        <Route componet={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
