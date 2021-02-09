import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import HomeMenu from './components/HomeMenu';
import Header from './components/Header'
import BeerList from './components/BeerList'
import BeerCard from './components/BeerRandom'
import './App.css';


function App(props) {
  return (
    <div className="App">
      <div className="container">

      {
        props.location.pathname === '/' ?
        null : <Header />
      }

      <Switch>
        <Route exact path='/'><HomeMenu /></Route>
        <Route path='/beers'><BeerList /></Route>
        <Route path='/:id'><BeerCard /></Route>
      </Switch>
      </div>
    </div>
  );
}

export default withRouter(App);
