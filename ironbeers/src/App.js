import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import { Switch, Route } from 'react-router-dom'
import AllBeers from './components/Home'
import RandomBeer from './components/Home'
import NewBeer from './components/Home'


class App extends Component {
  render() {
    return (
      <div className="App">
    	
     
      <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/beers' component={AllBeers} />
          <Route exact path='/random-beer' component={RandomBeer} />
          <Route exact path="/new-beer" component={NewBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
