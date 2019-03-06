import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home'
import Beers from './components/Beers'
import Random from './components/Random'
import NewBeer from './components/NewBeer'
import './App.css';
import CardBeer from './components/CardBeer';
library.add(faHome)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/beers' component={Beers}/>
          <Route exact path='/random' component={Random}/>
          <Route exact path='/new-beer' component={NewBeer}/> 
          <Route exact path='/beers/:id' component={CardBeer}/> 
        </Switch>
      </div>
    );
  }
}

export default App;
