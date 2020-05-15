import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import Home from './components/Home'
import ShowBeer from './components/ShowBeer'

function App() {
  return (
    <div className="App">
    
     <Switch>
     <Route exact path='/' component={Home}/>
     <Route exact path='/beers' component={Beers}/>
     <Route exact path='/random-beer' component={RandomBeer}/>
     <Route exact path='/new-beer' component={NewBeer}/>
     <Route exact path='/beers/:id' component={ShowBeer}/>
     </Switch>
    </div>
  );
}

export default App;
