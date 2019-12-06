import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from "./components/Home"
import Random from "./components/Random"
import AllBeers from "./components/AllBeers"
import NewBear from "./components/NewBear"
import OneBear from "./components/OneBear"
import {Link} from "react-router-dom"


function App ()  { 
    return (
    <>
    <nav className="navbar navbar-light bg-light">
        <Link to='/' className="navbar-brand">Home</Link>
    </nav>

    <Switch>      
    <Route exact path="/" component={Home}/>
    <Route path="/all-beers/:id" component={OneBear}/>
    <Route exact path='/all-beers' component={AllBeers}/>
    <Route path="/random" component={Random}/>
    <Route path='/new' component={NewBear}/>
    </Switch>
    </>
    )
  
}

export default App;
