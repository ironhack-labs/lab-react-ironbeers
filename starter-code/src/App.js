import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import BeerList from './components/BeerList';
import BeerDetail from './components/BeerDetail';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/beers'>
          <Header />
          <BeerList />
        </Route>
        <Route path='/beers/:id' render={(props) => <BeerDetail {...props} />}/>
        <Route exact path='/random-beer'>
          <Header />
          <RandomBeer />
        </Route>
        <Route exact path='/new-beer'>
          <Header />
          <NewBeer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
