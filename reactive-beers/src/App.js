import React, {Component} from 'react';
import './App.css';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import Home from './components/Home';
import OneBeer from './components/OneBeer'
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Switch>
            <Route exact path='/all' component={Beers}/>
            <Route exact path='/ran' component={RandomBeer}/>
            <Route exact path='/add' component={NewBeer}/>
            <Route exact path='/beer/:id' component={OneBeer}/>
          </Switch>
        <Home />
      </div>
    );
  }
}

export default App;
