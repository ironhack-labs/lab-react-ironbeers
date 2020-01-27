import React from 'react';
// import './App.css';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import AllBeers from './components/all-beers';
import RandomBeer from './components/random-beer';
import NewBeer from './components/new-beer';
// import { render } from 'react-dom';


const App= () => (

  <div className="App">
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/beers' component={AllBeers} />
      <Route path='/random-beer' component={RandomBeer} />
      <Route path='/new-beer' component={NewBeer} />
    </Switch>
  </div>
)


export default App;
