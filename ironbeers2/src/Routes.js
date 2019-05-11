import React from 'react'
import {Route, Switch} from 'react-router-dom'
import HomePage from './components/Home/HomePage'
import AllBeer from './components/Beers/AllBeers'
import NewBeer from './components/Beers/NewBeer'
import RandomBeer from './components/Beers/RandomBeer'


const Routes = () => (
  
  
    <Switch>
      <Route exact path = {'/'} component = {HomePage}/>
      <Route exact path = {'/AllBeer'} component = {AllBeer}/>
      <Route exact path = {'/RandomBeer'} component = {RandomBeer}/>
      <Route exact path = {'/NewBeer'} component = {NewBeer}/>
      <Route component = {() => <p> 404</p>}/>
      
    </Switch>
  
)

export default Routes