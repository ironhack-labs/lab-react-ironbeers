import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import HomePage from './components/HomePage/HomePage'
import BeersList from './components/BeersList/BeersList';

function App() {
  return (
    <div className="App">

   

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path='/beers' component= {BeersList} />
     
    </Switch>

   
      
    </div>
  );
}

export default App;
