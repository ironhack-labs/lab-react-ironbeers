import React, { Component } from 'react';
//import Navbar from './components/Navbar';
import BeerList from './components/BeerList';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import BeerDetails from './components/BeerDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path='/' component={Navbar}/>
          <Route exact path='/beers' component={BeerList}/>
          <Route exact path='/beer/:id' component={BeerDetails}/>
          <Route exact path='/random-beer' component={BeerDetails}/>
          <Route exact path='#' component={Navbar}/>
        </Switch>
      </div>
    );
  }
}

export default App;
