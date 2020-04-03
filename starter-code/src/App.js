import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom'; 
import './App.css';

import IronbeerHome from './components/ironbeer-home';
import Beers from './components/beers';
import RandomBeer from './components/random-beer';
import BeerDetail from './components/beer-detail';
import AddBeer from './components/add-beer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={IronbeerHome} />
          <Route path='/beers' component={Beers}/>
          <Route path='/random-beer' component={RandomBeer}/>
          <Route path='/beer-detail/:id' component={BeerDetail}/>
          <Route path='/add-beer' component={AddBeer}/>
        </Switch>  
      </div>
    );
  }
}

export default App;
