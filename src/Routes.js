import React from 'react'
import {Route,Switch} from 'react-router-dom'
import HomeContainer from './components/home/HomeContainer'
import AllBeers from './components/AllBeers'
import RandomBeers from './components/RandomBeers'
import NewBeer from './components/NewBeer'

const Routes = () => (
  <Switch>
    <Route exact path ={'/'} component ={HomeContainer} />
    <Route exact path ={'/allbeers'} component ={ AllBeers  } />
    <Route exact path ={'/random'} component ={ RandomBeers } />
    <Route exact path ={'/new'} component ={ NewBeer } />
    <Route component ={()=> <p>404</p>  }></Route>
  </Switch>

)

export default Routes