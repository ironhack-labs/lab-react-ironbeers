import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import AllBeers from './components/AllBeers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import DetailedBeer from './components/DetailedBeer';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      {/* IT-2 */}
      <Route exact path="/beers" component={AllBeers}/> 
        {/* IT-4 */}
        <Route exact path="/beers/:id" render={(props) => <DetailedBeer {...props}/>}/>
        {/* Fin IT-4 */}
      <Route exact path="/random-beer" component={RandomBeer}/>
      <Route exact path="/new-beer" component={NewBeer}/>
      {/* Fin IT-2 */}
    </Switch>
  );
}

export default App;
