import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import NewBeer from './Components/NewBeer';
import RandomBeer from './Components/RandomBeer';
import AllBeers from './Components/AllBeers';
import BeerDetails from './Components/BeerDetails';


class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route exact path='/beers' component={ AllBeers } />
          <Route exact path='/random' component={ RandomBeer } />
          <Route exact path='/new-beer' component={ NewBeer } />
          <Route exact path='/beers/:id' component={ BeerDetails } />
        </Switch>
      </>
    );
  }
}

export default App;