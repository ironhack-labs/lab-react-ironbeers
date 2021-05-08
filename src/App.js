import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home'
import BeerList from './pages/BeerList/BeerList'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/beers' component={BeerList} />
      </Switch>
    </div>
  );
}

export default App;
