import React from 'react';
import './styles/index.css';
import { Switch, Route } from 'react-router-dom'
import Home from './components/home'
import beers from './components/Beers'
// import randombeer from './components/Random-beer'
// import newbeer from './components/New-beer'

function App() {
  return (
    <>
      <Home></Home>
      <Switch>
        <Route path="/beers" exact component={beers} />
        <Route path="/random-beer" exact />
        <Route path="/new-beer" exact />
      </Switch>
    </>
  );
}

export default App;
