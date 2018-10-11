import React from 'react'
import {Switch,Route} from 'react-router-dom'
//import App from './App'
import Beers from './components/Beers'
import NewBeer from './components/NewBeer'
import RandomBeer from './components/RandomBeer'


const Routes = () =>{
    return (
        <Switch>
              <Route exact path="/"/>
               <Route exact path="/beers" component={Beers}/>
               <Route  path="/newbeer" component={NewBeer}/>
               <Route  path="/randombeer" component={RandomBeer}/>
        </Switch>
    )
}

export default Routes