import React from 'react';
import './App.css';
import axios from 'axios'; 
import Home from './Home'; 
import Header from './Header'; 
import BeerList from './allBeers'; 
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 

function App(){
  const NotFound = () => {
    return <h1>not found :)</h1>
  }
  return (
    <>
      <Header/>
      <BrowserRouter>
      <Switch>
        <Home/>
        {/* <Route path='/' component={Home}/> */}
        <Route path="/beers" render={() => <BeerList/>} />
      </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;
