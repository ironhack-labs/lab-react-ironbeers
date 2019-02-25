import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import RandomBeer from './components/Random-beer';
import Beers from './components/Beers';
import NewBeer from './components/New-Beer';
import SingleBeer from './components/SingleBeer';


import { Switch, Route } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          
          <Switch>
            <Route path='/all/' component={Beers} />
            <Route exact path='/' component={Home} />
            <Route path='/random/' component={RandomBeer} />
            <Route path='/new/' component={NewBeer} />
            <Route path='/single/:id' component={SingleBeer} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
