import React from 'react';
import './App.css';
import Home from "./components/Home/Home"
import {Switch, Route} from "react-router-dom"
import ListAllBeers from "./components/ListAllBeers/ListAllBeers"


function App() {
  return (
    <div className="App">
     <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/listAllBeers' component={ListAllBeers}/>
        </Switch>
    </div>
  );
}

export default App;
