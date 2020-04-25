import React, { Component } from 'react';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom';
import Beers from './pages/Beers';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to='/beers'>
          <img src="/images/beers.png" alt="allbeers"/>
          <h2>All Beers</h2>  
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab amet neque alias. Magni id mollitia architecto laborum.</p>
        </Link>
        <Link to='/random-beer'>
          <img src="/images/random-beer.png" alt="randombeer"/> 
          <h2>Random Beer</h2> 
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab amet neque alias. Magni id mollitia architecto laborum.</p>
        </Link>
        <Link to='/new-beer'>
          <img src="/images/new-beer.png" alt="newbeer"/> 
          <h2>New Beer</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab amet neque alias. Magni id mollitia architecto laborum.</p>
        </Link>

       <Switch>
          <Route path='/beers' component={Beers}/>
          <Route path='/random-beer' component={RandomBeer}/>
          <Route path='/new-beer' component={NewBeer}/>
        </Switch>
      </div>
    );
  }
}

export default App;
