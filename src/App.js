import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

import Index from './components/index/Index'
import BeerList from './components/beerList/BeerList'
import RandomBeer from './components/randomBeer/RandomBeer'
import CreateBeer from './components/createBeer/CreateBeer'
import BeerDetails from './components/beerDetails/BeerDetails'



function App() {
  return (
    
    <>
      
      <Switch>
        
        <Route path='/' exact render={() => <Index />} />
       
        <Route path='/getAllBeers' render={() => <BeerList />} />
       
        <Route path='/getRandomBeer' render={() => <RandomBeer />} />

        <Route path='/createBeer' render={() => <CreateBeer />} />

        <Route path='/:id' render={props => <BeerDetails {...props}/>} />
          
      </Switch>

    </>
        
  )
}

export default App;
