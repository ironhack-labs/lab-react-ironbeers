import React from 'react';
import './App.css';

import Home from './pages/home/Home'
import AllBeers from './pages/allBeers/AllBeers'
import Navbar from './layout/navbar'

import { Switch, Route, Redirect } from 'react-router-dom'

function App() {
  return (

    <div className="phonescreen">
    <Navbar />
    
    <Switch>
      <Route path="/" exact render={() => <Home />} />  
       <Route path="/allbeers"  render={() => <AllBeers />} />  
      {/*<Route path="/randombeer" render={() => <RandomBeer />} />  
      <Route path="/newbeer" render={() => <NewBeer />} />   */}
    </Switch>
   </div>
  );
}

export default App;
