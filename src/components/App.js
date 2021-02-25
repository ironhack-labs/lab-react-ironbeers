import React from 'react'
import './App.css'
import './Home'
import Home from './Home'
import Header from './Header'
import { Switch,Route } from 'react-router-dom'
import Beers from './Beers'

function App() {
  return (
  <>
  <Header/>
  
  <Switch>
    <Route path="/" exact render={()=><Home/>}></Route>
    <Route path="/beers" render={()=><Beers/>}></Route>
    <Route path="/new-beer" ></Route>

  </Switch>
    </>
  )
}

export default App
