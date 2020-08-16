import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import AllBeers from './components/AllBeers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      {/* IT-2 */}
      <Route exact path="/beers" component={AllBeers}/> 
      <Route exact path="/random-beer" component={RandomBeer}/>
      <Route exact path="/new-beer" component={NewBeer}/>
      {/* Fin IT-2 */}
    </Switch>
  );
}

export default App;
