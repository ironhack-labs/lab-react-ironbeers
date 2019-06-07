import React from 'react';
import './App.css';

import Home from './components/Home'
import BeerList from './components/BeerList'
import BeerDetail from './components/BeerDetail'
import RandomBeer from './components/RandomBeer'
import { Switch, Route } from 'react-router-dom'
import AddNewBeer from './components/AddNewBeer';

function App() {
  return (
    <main>

      <Switch>

        <Route path='/' exact component={Home} />
        <Route path='/list' exact component={BeerList} />
        <Route path='/:id' exact component={BeerDetail} />
        <Route path='/beer/random' exact component={RandomBeer} />
        <Route path='/new/beer' exact component={AddNewBeer} />


      </Switch>

    </main>
  )
}

export default App;
