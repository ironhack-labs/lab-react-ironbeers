import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
// import NavBar from './components/NavBar/NavBar.jsx'
import AllBeers from './components/views/AllBeers';
import OneBeerID from './components/views/OneBeerID';
import RandomBeer from './components/views/RandomBeer';
import AddNewBeer from './components/views/AddNewBeer';
import Home from './components/views/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* <NavBar /> */}
       <Switch>
       <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={AllBeers} />
        <Route path="/random" component={RandomBeer} />
        <Route path="/new" component={AddNewBeer} /> 
        <Route path="/:id" component={OneBeerID} />
      </Switch>
      </div>
    );
  }
}

export default App;
