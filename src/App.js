import React from 'react';
import './App.css';
import Home from './components/Home';
import { Switch, Route } from 'react-router-dom';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import CreateBeer from './components/CreateBeer';
import OneBeer from './components/OneBeer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route path="/beers/:id" render={props => <OneBeer {...props} />}/>
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={CreateBeer} />
      </Switch>
    </div>
  );
}

export default App;
