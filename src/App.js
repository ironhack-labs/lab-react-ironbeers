import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Beers from './components/Beers';
import Random from './components/Random';
import New from './components/New';
import Details from './components/Details';

function App() {
  return (
    <>
    <Route exact path='/' component={Home} />
    <Route exact path='/beers' component={Beers} />
    <Route exact path='/random-beer' component={Random} />
    <Route exact path='/new-beer' component={New} />
    <Route exact path='/beer/:id' component={Details} />
    </>
   
  );
}

export default App;
