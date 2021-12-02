import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import { Switch, Route } from 'react-router-dom'
import Beers from './components/Beers';
import Cerveza from './components/Cerveza';
import Random from './components/Random';
import NewBeer from './components/NewBeer';



function App() {
  return (
    <div className="App">
    
    <div>
    <Switch>
        <Route path="/" exact render={() => <HomePage />} />
        <Route path="/beers" exact render={() => <Beers />}/>
        <Route path="/random-beer" exact render={() => <Random />}/>
        <Route path="/new-beer" exact render={() => <NewBeer />}/>
        <Route path="/:id" render={(props) => <Cerveza {...props} />} />
       
    </Switch>
      </div>
      </div>
  );
}

export default App;
