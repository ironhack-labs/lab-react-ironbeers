import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import { Switch, Route } from 'react-router-dom';
import AllBeers from './components/AllBeers/AllBeers';
import NewBeers from './components/NewBeers/NewBeers';
import RandomBeers from './components/RandomBeers/RandomBeers'
import OneBeer from './components/OneBeer/OneBeer';


class App extends Component {
  render() {
    return (
      <div className="App">
       
       <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/beers' component={AllBeers}/>
          <Route exact path='/new' component={NewBeers}/>
          <Route exact path='/random' component={RandomBeers}/>
          <Route exact path='/oneBeer/:id' component={OneBeer}/>


        </Switch>
      </div>
    );
  }
}

export default App;

          
