import React from 'react'
import { Switch, Route } from 'react-router-dom'




import Index from './pages/Index'
import Allbeers from './pages/allBeers/Allbeers'
import RandomBeer from './pages/RandomBeer'
import NewBeer from './pages/NewBeer'
import SingleBeer from './pages/SingleBeer'


import './App.css'




function App() {
  return (
    <>
      
      <Switch>
        <Route path="/" exact render={() => <Index />} />
        <Route path="/allBeers" exact render={() => <Allbeers />} />
        <Route path="/randomBeer" exact render={() => <RandomBeer />} />
        <Route path="/singleBeer/:beer_id" render={props => <SingleBeer {...props} />} /> 
        <Route path="/newBeer" render={props => <NewBeer />} /> 
      </Switch>

    </>
  );
}

export default App;