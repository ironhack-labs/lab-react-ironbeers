import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Home from './components/Home'
import BeerListContainer from './components/beerList/BeerListContainer'
import RandomBeerContainer from './components/random-beer/RandomBeerContainer'
import NewBeerContainer from './components/new-beer/NewBeerContainer'

import './App.css';
import SingleBeerContainer from './components/SingleBeer/SingleBeerContainer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/beers" component={BeerListContainer}/>
        <Route path="/beers/:id" render={(props) => <SingleBeerContainer {...props}/>} />
        <Route path="/random-beer" component={RandomBeerContainer}/>
        <Route path="/new-beer" component={NewBeerContainer}/>
      </Switch>
    </div>
  );
}

export default App;
