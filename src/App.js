import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Beers from './components/Beers';
import BeerDetail from './components/BeerDetail'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'





function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path='/random-beer' component={RandomBeer} />
        <Route exact path='/new-beer' component={NewBeer} />
        <Route exact path='/beers/:Id' component={BeerDetail} />
      </Switch>
    </div>
  );
}

export default App;