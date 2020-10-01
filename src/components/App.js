import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Index from './pages/Index'
import Navbar from './layout/navbar/Navbar'
import Allbeers from './pages/allbeers/Allbeers-list'
function App() {
  return (
    <>
     
      <Switch>
        <Route path="/" exact render={() => <Index />} />
        <Route path ="/allbeers" exact render={()=> <Allbeers />} />
      </Switch>
      </>
  )
}

export default App;
