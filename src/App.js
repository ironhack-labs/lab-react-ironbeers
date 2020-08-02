import React from 'react';
import './App.css';
import Home from "./components/Home/Home"
import {Switch, Route} from "react-router-dom"
import ListAllBeers from "./components/ListAllBeers/ListAllBeers"
import ListOne from "./components/ListOne/ListOne"


function App() {
  return (
    <div className="App">
     <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/listAllBeers' component={ListAllBeers}/>
          <Route path="/:id" render={(props) => <ListOne  {...props} />}/>
        </Switch>
    </div>
  );
}

export default App;
