import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import HomePage from "./components/HomePage"
import Beers from './pages/Beers';
import RandomBeers from './pages/RandomBeers';
import NewBeers from './pages/NewBeers';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/random-beer" component={RandomBeers} />
        <Route exact path="/new-beer" component={NewBeers} />
      </BrowserRouter>
    </div>
  );
}

export default App;
