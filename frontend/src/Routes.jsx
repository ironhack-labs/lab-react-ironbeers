import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import Signup from "./components/Signup.jsx"
import Beers from "./components/Beers"
//import Logout from "./components/Logout"
import Axios from 'axios';
let url = 'http://localhost:3000/logout'


export default () => <Switch>
    <Route exact path ="/" component={Home} />
    <Route path ="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/beers" compoenent={Beers} />
    <Route path="/logout" component={()=>{
        Axios.get(url , {withCredentials:true})
            .then(res => console.log(res))
            .catch(e => console.log(e))
    }} />
    <Route component={ ()=> {
        return (
            <h2>Página no existe</h2>
        )
    }}/>
</Switch>