import React, { Component } from 'react';

import Home from './components/Home';
import Beers from './components/Beers';
import BeerDetail from './components/BeerDetail';


import './App.css';
import { Switch, Route } from 'react-router-dom';



class App extends Component {

  render() {

    return (
      <div className="App">

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/beers' component={Beers} />
          <Route exact path='/beers/:id' component={BeerDetail} />

          {/* <Route path='/random-beer' component={RandomBeer} /> */}
          {/* <Route path='/new-beer' component={NewBeer} /> */}
        </Switch>
       
      </div>
    );
  }
}

export default App;
