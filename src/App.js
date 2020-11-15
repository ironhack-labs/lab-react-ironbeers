import React from 'react';
import './App.css';
import Home from './Components/Home.js'
import Beers from './Components/Beers.js'
import RandomBeer from './Components/RandomBeer.js'
import NewBeer from './Components/NewBeer.js'
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import DetailBeer from './Components/DetailBeer.js'

function App() {
  return (
    <div className="page">
    <nav className="header"> <Link to='/'> Home</Link></nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={NewBeer} />
        <Route exact path="/beers/:beerId" component={DetailBeer} />
        
      </Switch>
    </div>
  );
}

export default App;
