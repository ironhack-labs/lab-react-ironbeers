import React from 'react';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom';

import Beers from "./components/Beers";
import RandomBeer from "./components/RandomBeer";
import NewBeer from './components/NewBeer';


function App() {
  return (
    <div className="App"> 
      <Link to="/beers" >
        <img src="" alt=""/>
        <h1>All Beers</h1>
        <p>kajdkisjfdsjf</p>
      </Link>

      <Link to="/random-beer">
        <img src="" alt=""/>
        <h1>Random Beer</h1>
        <p>kajdkisjfdsjf</p>
      </Link>
      
      <Link to="/new-beer">
        <img src="" alt=""/>
        <h1>New Beers</h1>
        <p>kajdkisjfdsjf</p>
      </Link>

      <Switch>
        <Route exact path="/beers" component={Beers}/>
        <Route exact path="/random-beer" component={RandomBeer}/>
        <Route exact path="/new-beer" component={NewBeer}/>
      </Switch>
  
    </div>
  );
}

export default App;
