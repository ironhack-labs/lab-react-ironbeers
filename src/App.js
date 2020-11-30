import React from 'react';
import './App.css';
import { Switch, Route,Link } from "react-router-dom";

import Beers from './components/Beers';
import Home from './components/Home';
//import Beer from './components/Beer';
import BeerDetail from './components/BeerDetail';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';

 

function App() {


  
  return (
    <div className="App">
      <div className="home-div">
      <Link to="/"> <img src="https://image.flaticon.com/icons/png/512/25/25694.png" alt="home-logo" width="100px"/> </Link>
      </div>
       
      <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/beers' component={Beers}/>
          <Route path='/beers/:beerId' component={BeerDetail}/>
          <Route path='/random-beer' component={RandomBeer}/>
          <Route path='/new-beer' component={NewBeer}/>
      </Switch>

    </div>
  );
}

export default App;
