import React from 'react'
import {Switch, Route} from 'react-router-dom'
import BeerList from './components/BeerList'
/* import RandomBeer from './components/RandomBeer'
import BeerForm from './components/BeerForm'
 */

const Routes = ()=>{
  return(
    <Switch>
      <Route path='/beers' component={BeerList}/>
      {/* <Route path='/random-beer' component={RandomBeer}/>
      <Route path='/new-beer' component={BeerForm}/> */}
    </Switch>
  )
}

export default Routes