import React from 'react';
import './App.css';
import Homepage from './components/Homepage'
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/beers' component={Beers}/>
        <Route exact path='/random-beer' component={RandomBeer}/>
        <Route exact path='/new-beer' component={NewBeer}/>
      </Switch>
    </div>
    
  );
}

export default App;
