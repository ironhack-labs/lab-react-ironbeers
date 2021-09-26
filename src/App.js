import React from 'react';
import './App.css';
import Homepage from './components/Homepage';
import {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom'
import axios from 'axios';
import SingleBeer from './components/SingleBeer';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import ListBeers from './components/ListBeers';



function App() {



  return (
    <div className="App">
   
      <header className="App-header" style={{backgroundColor: "blue"}}><span>🏠</span> </header>
    {/* <Switch> */}
      <Homepage />
      <Route exact path="/beers" component={ListBeers} />
      <Route exact path="/random-beer" component={RandomBeer}/>
      <Route exact path="/new-beer" component={NewBeer}/>
      <Route exact path='/beers/:id' component={SingleBeer} />
    {/* </Switch> */}
      {/* <Homepage /> */}
    </div>
  );
}

export default App;
