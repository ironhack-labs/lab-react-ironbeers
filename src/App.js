import React from 'react';
import './App.css';
import Beers from './components/Beers'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'
import Body from './components/Body'
import BeerCard from './components/BeerCard';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact component={Body} />
          <Route path='/beers' exact component={Beers} />
          <Route path='/random-beer' component={RandomBeer} />
          <Route path='/new-beer' component={NewBeer} />
          <Route path='/beer/:id' component={BeerCard} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
