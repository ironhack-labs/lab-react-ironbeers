import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './pages/Home.jsx'
import NavMain from './components/NavMain';
import Beers from './pages/Beers';
import OneBeer from './pages/OneBeer';
import RandomBeer from './pages/RandomBeer';
import CreateBeer from './pages/CreateBeer';

function App() {
  return (
    <div className="App">
      <NavMain />
     <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/beers' component={Beers} />
    <Route path='/beer/:id' component={OneBeer} />
    <Route path='/random-beer' component={RandomBeer} />
    <Route path='/new-beer' component={CreateBeer} />
     </Switch>
    </div>
  );
}

export default App;
