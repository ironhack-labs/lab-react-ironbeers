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
        <Route path='/' component={Layout} />
      </Switch>
    </div>
  );
}

const Layout = () => {
  return <div>
    <Header />
    <Route exact path='/beers' component={BeerList} />
    <Route path='/beers/:id' component={BeerDetail} />
    <Route path='/random-beer' component={RandomBeer} />
    <Route path='/new-beer' component={NewBeer} />
  </div>
}

export default App;
