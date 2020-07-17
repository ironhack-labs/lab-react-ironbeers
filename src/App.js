import React from 'react';
import './App.css';
import axios from 'axios'; 
import Home from './Home'; 
import Header from './Header'; 
import BeerList from './allBeers'; 
import { Switch, Route } from 'react-router-dom'; 
import RandomBeer from './randomBeer';
import NewBeer from './newBeer';

function App(){
  const NotFound = () => {
    return <h1>not found :)</h1>
  }
  return (
    <main>
      <Switch>
        {/* <Home/> */}
        {/* <Route path='/' component={Home}/> */}
        <Route exact path='/' render={()=> <Home/>} />
        <Route exact path="/beers" render={() => <BeerList/>} />
        <Route exact path="/random-beer" render={() => <RandomBeer/>} />
        <Route exact path="/new-beer" render={() => <NewBeer/>} />
      </Switch>
    </main>
  )
}

export default App;
