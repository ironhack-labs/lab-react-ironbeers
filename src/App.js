import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import NewBeer from './components/NewBeer'
import RandomBeer from './components/RandomBeer'
import Beers from './components/Beers'
import SingleBeer from './components/SingleBeer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/beers/all' component={Beers}/>
        <Route path='/beers/random' component={RandomBeer}/>
        <Route path='/beers/new' component={NewBeer}/>
        <Route path='/beers/:id' render={(routeProps) => {
          return <SingleBeer {...routeProps}/>
        }}/>
      </Switch>
    </div>
  );
}

export default App;
