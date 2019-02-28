import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import Signup from "./components/Signup.jsx"
import Beers from "./components/Beers"
import Logout from "./components/Logout"


export default () => <Switch>
    <Route exact path ="/" component={Home} />
    <Route path ="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/beers" compoenent={Beers} />
    <Route path="/logout" component={Logout} />
</Switch>