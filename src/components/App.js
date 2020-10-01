import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'



import NavBar from './NavBar.js'
import Home from './pages/home.js'
import AllBeers from './pages/AllBeers.js'
import OneBeer from './pages/OneBeer.js'
import RandomBeer from './pages/RandomBeer.js'

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path='/' exact render={() => <Home />} />
        <Route path='/allBeers' exact render={() => <AllBeers />} />
        <Route path='/randomBeer' render={(elm) => <RandomBeer {...elm}/>} />      
        <Route path='/:id' render={(elm) => <OneBeer {...elm} />} />        
      </Switch>
    </>
  );
}

export default App;
