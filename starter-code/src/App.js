import React, { Component } from 'react';
import HomePage from './pages/HomePage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListBeersPage  from './pages/ListBeersPage';
import NewBeerPage  from './pages/NewBeerPage';
import RandomBeerPage  from './pages/RandomBeerPage';
import BeerPage from './pages/BeerPage';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={HomePage}/>  
          <Route exact path='/beers' component={ListBeersPage}/>
          <Route exact path='/random-beer' component={RandomBeerPage}/>
          <Route exact path='/new-beer' component={NewBeerPage}/>
          <Route exact path='/:id' component={BeerPage}/> 
        </Switch>   
      </div>
    );
  }
}

export default App;
