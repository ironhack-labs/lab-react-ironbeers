import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import {Switch, Link, Route} from 'react-router-dom'
import Beers from './Beers.js'
import RandomBeer from './RandomBeer.js'
import NewBeer from './NewBeer.js'
import BeerDetail from './BeerDetail.js'

class App extends Component {


  state = {allBeers: []}


  render() {
    return (
      <div className="App">
      <nav>
        <Link to='/beers' className='navLink'>All Beers</Link>
        <Link to='/random-beer' className='navLink'>Random Beer</Link>
        <Link to='/new-beer' className='navLink'>Add A New Beer</Link>
      </nav>
 

      <Switch>
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={NewBeer} />
        <Route exact path="/beer-detail/:beerId" component={BeerDetail} />

       
      </Switch>

      </div>
    );
  }
}

export default App;
