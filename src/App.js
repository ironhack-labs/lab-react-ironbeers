import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Allbeers from './components/Allbeers';
import Beer from './components/Beer';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';

function App() {
  return (
    <div >
      <Header />
      <Switch>
          <Route exact path='/' component={Home} />   
          <Route exact path='/beers' component={Allbeers} />     
          <Route  path='/beers/:beerId'   render={(props)=> <Beer {...props} /> }/> 
          <Route  path='/random'   render={(props)=> <RandomBeer {...props} /> }/> 
          <Route  path='/new'   render={(props)=> <NewBeer {...props} /> }/>    
        </Switch>
    </div>
  );
}

export default App;
