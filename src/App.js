import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router-dom';
import Beers from './components/Beers';
import Home from './components/Home';
import ShowBeer from './components/ShowBeer';
import NewBeer from './components/NewBeer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/show/:id" component={ShowBeer}/>
        <Route exact path="/random" component={ShowBeer} />
        <Route exact path="/new-beer" component={NewBeer} />
      </Switch>
    </div>
  );
}

export default App;
