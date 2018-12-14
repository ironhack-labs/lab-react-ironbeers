import React from 'react';
import { Switch, Route} from 'react-router-dom'
import Home from './components/home/Home'
import All from './components/beers/All'
import Random from './components/beers/Random'
import New from './components/beers/New'

const Routes = () => {

  return (
    <Switch>
    <Route  exact path="/" component ={Home}/>
    <Route path="/beers" component ={All}/> 
    <Route path="/new-beer" component ={New}/> 
    <Route path="/random-beer" component ={Random}/> 

    </Switch>
    
  )
}


export default Routes;