import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Beers from './components/Beers'

function App() {
  return (
    <div className="App">
        <Switch>
      <Route path="/home"  component={Home}/>
      <Route path="/beers" component={Beers}/>
      </Switch>
    </div>
  );
}

export default App;
