import React, { Component } from 'react';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom';
import Beers from './pages/Beers';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Link to='/beers'> Beers Page </Link>
       <Link to='/random-beer'> RandomBeer Page </Link>
       <Link to='/new-beer'> NewBeer Page </Link>

       <Switch>
          <Route path='/beers' component={Beers}/>
          <Route path='/random-beer' component={RandomBeer}/>
          <Route path='/new-beer' component={NewBeer}/>
        </Switch>
      </div>
    );
  }
}

export default App;
