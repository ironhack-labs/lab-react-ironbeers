import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import { Switch, Route } from 'react-router-dom';
import AllBeers from './components/AllBeers';
import NavBar from './components/NavBar';




function App() {
  return (
    <div className="App">
      <NavBar/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/beers' component={AllBeers} />
          {/* <Route exact path='/beers/:id' component={SingleBeer} />
          <Route exact path='/random-beer' component={RandomBeers} />
          <Route exact path='/new-beer' component={NewBeer} /> */}
        </Switch>
      </div>
  );
}

export default App;
