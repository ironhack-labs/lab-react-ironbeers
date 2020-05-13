import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import Beers from './components/Beers/Beers';
import RandomBeer from './components/RandomBeer/RandomBeer';
import NewBeer from './components/NewBeer/NewBeer';
import ListBeer from './components/ListBeer/ListBeer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/beers/:beerId" component={ListBeer} />
        <Route path="/beers" component={Beers} />
        <Route path="/random-beer" component={RandomBeer} />
        <Route path="/new-beer" component={NewBeer} />
      </Switch>
    </div>
  );
}

export default App;
