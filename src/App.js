import React from 'react';
import './App.css';
import Home from './components/Home'
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import {Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'


function App() {
  return (
    <div className="App">
      
        <Switch>      
          <Route exact path='/' component={Home} />
          <Route path='/beers' component={Beers} />
          <Route exact path='/random-beer' component={RandomBeer} />
          <Route exact path='/new-beer' component={NewBeer} />
        </Switch>

    </div>
  );
}

export default App;
