import React from 'react';
import './App.css';
import Home from './components/home/Home';
import { Switch, Route } from 'react-router-dom';
import Beers from './components/beers/Beers'
import Navbar from './components/navbar/Navbar'
import NewBeer from './components/newbeer/NewBeer'
import RandomBeer from './components/randombeers/RandomBeer'
import SingleBeer from './components/beers/SingleBeer'

function App() {
  return (
    <div className="App">
      <h1>Iron Beers</h1>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/beers' component={Beers} />
          <Route exact path="/beers/:id" component={SingleBeer} />
          <Route exact path='/randombeer' component={RandomBeer} />
          <Route path="/newbeer" component={NewBeer} />
        </Switch> 
      </div>
    </div>
  );
}

export default App;
