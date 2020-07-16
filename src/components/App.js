import React from 'react';
import './App.css';
import HomeComponent from './Home/Home'
import Navigation from './ui/navbar/index'
import { Switch, Route } from 'react-router-dom'
import BeerList from './Beers/allBeers'

function App() {
  return (
    <>
      <Navigation />
      
      <Switch>
        
        <Route path='/beers' render={() => <BeerList />} />

      </Switch>
      <HomeComponent />
    </>
  );
}

export default App;
