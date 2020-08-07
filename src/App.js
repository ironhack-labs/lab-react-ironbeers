import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import AllBeers from './components/AllBeers';
import SingleBeer from './components/SingleBeer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path='/beers' component={AllBeers} />
          <Route path='/beers/:id' component={SingleBeer} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
