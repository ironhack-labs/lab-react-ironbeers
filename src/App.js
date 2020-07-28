import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import ListBeers from './components/ListBeers';
import SingleBeer from './components/SingleBeer';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/beers'>
          <ListBeers/>
        </Route>
        <Route path='/random-beer'>
          <RandomBeer/>
        </Route>
        <Route path='/new-beer'>
          <NewBeer/>
        </Route>
        <Route path='/beers/:id' render={(props) => <SingleBeer key={Math.random()} {...props}/>} />
      </Switch>
    </div>
  );
}

export default App;
