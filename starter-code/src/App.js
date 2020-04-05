import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Beers from './components/Beers'
import NewBeer from './components/NewBeer'
import RandomBeer from './components/RandomBeer'
import SingleBeer from './components/SingleBeer'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/beers" component={Beers}/>
          <Route exact path="/randombeer" component={RandomBeer}/>
          <Route exact path="/newbeer" component={NewBeer}/>
          <Route path="/beers/:id" component={SingleBeer}/>
          <Route path="/" component={Home}/>
        </Switch>


       

      </div>
    );
  }
}

export default App;
