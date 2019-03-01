import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import Beer from './components/Beer'

export default (props)=> {
    let {beers} = props
    // console.log(beers)
return(

<Switch>

<Route exact path="/" render = {(props) => <Home beers={beers} />}/>
        <Route path="/beer/:id" component={Beer} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
        </Switch>
        )
}
