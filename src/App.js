import React from 'react';
import { Route, Switch } from "react-router-dom"
import Navbar from './components/Nabvar/Navbar'
import Home from './components/Home/Home'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="App">
    <Navbar />
   
    <Switch>
      <Route path="/beers">All Beers</Route>
      <Route path="/random-beer">Random Beer</Route>
      <Route path="/new-beer">New Beer</Route>
      <Route path="/" exact component={Home}/>
    </Switch>
    </div>
  );
}

export default App;
