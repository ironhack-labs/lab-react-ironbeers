import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom";

import Home from './pages/Home';
import ListBeers from './pages/ListBeers';
import NewBeer from './pages/NewBeer';
import RandomBeer from './pages/RandomBeer';
import SpecificBeer from './pages/SpecificBeer';
import NavMain from './components/NavMain';


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <NavMain />
        
        <Switch>
          
          <Route exact path="/" component={Home} />

          <Route exact path="/beers" component={ListBeers} />

          <Route exact path="/new-beer" component={NewBeer} />

          <Route exact path="/random-beer" component={RandomBeer}/>

          <Route path="/:id" component={SpecificBeer} />

        </Switch>

      </div>
    );
  }
}

export default App;
