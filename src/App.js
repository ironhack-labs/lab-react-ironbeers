import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './views/Home';
import Headers from './views/Header.jsx';
import OneBeer from './views/Onebeer'
import RandomBeer from './views/RandomBeer'
import Beers from './views/Beers'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path='/beers/:beerId' component={OneBeer } />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
