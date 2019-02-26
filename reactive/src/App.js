import React, { Component } from 'react';
import Beers from './components/Beers'
import Header from './components/Header'
import { Switch, Route } from 'react-router-dom';
import Views from './components/Views'
import RandomBeer from './components/RandomBeer'
import SingleBeer from './components/SingleBeer'
import AddBeer from './components/AddBeer'

class App extends Component {
  render() {
    return (

      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Views} />
          <Route exact path='/beers' component={Beers} />
          <Route exact path='/random-beer' component={RandomBeer} />
          <Route exact path="/beers/:id" component={SingleBeer} />
          <Route exact path='/add-beer' component={AddBeer} />
        </Switch>


        {/* <Route exact path='/beers' component={} />
          <Route exact path='/random-beer' component={} />
          <Route exact path='/new-beer' component={} /> */}

      </div>
    );
  }
}

export default App;
