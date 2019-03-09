import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import ListBeer from './components/ListBeer';
import RandomBeer from './components/RandomBeer';
import SingleBeer from './components/SingleBeer';
import NewBeer from './components/NewBeer';
import {Switch, Route} from 'react-router-dom';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className='app'>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/all' component={ListBeer}></Route>
          <Route exact path='/random' component={RandomBeer}></Route>
          <Route exact path='/new' component={NewBeer}></Route>
          <Route exact path='/all/:id' component={SingleBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
