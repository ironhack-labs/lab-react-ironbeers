import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import AllBeers from './views/AllBeers';
import Home from './views/Home';
import SingleBeer from './views/SingleBeer';
import RandomBeer from './views/RandomBeer';
import NewBeer from './views/NewBeer';

import NavBar from './components/NavBar';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        {/* <p>IronBeers App June 2nd</p> */}

        <Switch>
          <Route path="/beers" component={AllBeers}></Route>
          <Route path="/random" component={RandomBeer}></Route>
          <Route path="/new" component={NewBeer}></Route>
          <Route path="/:id" component={SingleBeer}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
