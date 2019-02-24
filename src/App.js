import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './routes/home';
import Beers from './routes/beers';
import SingleBeer from './routes/singleBeer';
import RandomBeer from './routes/randomBeer';
import NewBeer from './routes/newBeer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/beers' component={Beers} />
          <Route exact path='/beers/:id' component={SingleBeer} />
          <Route path='/random-beer' component={RandomBeer} />
          <Route path='/new-beer' component={NewBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
