import React, {Component} from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Beers from './components/beer/Beers';
import BeerDetail from './components/beer/BeerDetail';
import AddBeer from './components/beer/AddBeer';
import RandomBeer from './components/beer/RandomBeer';
import {Switch, Route} from 'react-router-dom';

class App extends Component {
  render(){

    return (
      <div>
       <Navbar />
       <Switch>
       <Route exact path='/' component={Beers}/>
       <Route exact path='/beers/:id' component={BeerDetail}/>
       <Route exact path='/new-beer' component={AddBeer}/>
       <Route exact path='/random-beer' component={RandomBeer}/>
       </Switch>
      </div>
    );
  }
}

export default App;
