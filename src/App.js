import React from 'react';
import { Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import BeerList from './components/BeerList/BeerList';
import Beer from './components/Beer/Beer'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='App__content'>
        <Switch>
          <Route path="/beers" component={BeerList} exact />
          <Route path='/beers/:_id' component={Beer} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
