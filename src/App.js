import React from 'react';
import './App.css';
import Home from './components/Home';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Home />

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
