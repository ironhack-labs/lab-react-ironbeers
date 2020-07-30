import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './components/HomePage'
import ListBeers from './components/ListBeers'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>


        <Route exact path='/beers'>
          <ListBeers />
        </Route>
      </Switch>



    </div>
  );
}

export default App;
