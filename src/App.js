import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Beers from './components/Beers';
import BeerDetails from './components/BeerDetails';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';

class App extends Component {

  render(){
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/beers' component={Beers} />
        <Route exact path='/beers/:id' component={BeerDetails} />
        <Route exact path='/random-beer' component = {RandomBeer} />
        <Route exact path='/new-beer' component = {NewBeer}/>
      </Switch>
    </div>
  );
}
}

export default App;
