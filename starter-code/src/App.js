import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import BeersHome from './components/BeersHome'
import RandomBeers from './components/RandomBeers'
import NewBeers from './components/NewBeers'
import BeerList from './components/BeerList' 
import BeerDetails from './components/BeerDetails'
import NavBar from './components/NavBar'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <NavBar/>
       <Switch>
        <Route exact path='/' component={BeersHome}/>
        <Route exact path='/beers' component={BeerList}/>
        <Route exact path='/beers/:id' component={BeerDetails}/>
        <Route exact path='/random' component={RandomBeers}/>
        <Route  exact path='/new-beers' component={NewBeers}/>

      </Switch> 

      </div>
    );
  }
}

export default App;
