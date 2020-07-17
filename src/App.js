import React from 'react';
import Home from "./Components/Home";
import { Route, Switch } from "react-router-dom";
import AllBeers from "./Components/AllBeers";
import NewBeer from "./Components/NewBeer";
import RandomBeer from "./Components/RandomBeer";
import Beer from "./Components/Beer"



import './App.css';
import Header from './Components/Header';

function App() {

  const notFound = () => {
    return <h1>404 Not found <span role="img"> 🙃 </span></h1 >
  }
return (
  <div> 
   <Route exact path ="/" component={Header}/>
    <Switch>
      <Route exact path ="/" component={Home}/>
      <Route exact path = "/allbeers" component={AllBeers}/>
      <Route exact path = "/newbeer" component={NewBeer}/>
      <Route exact path = "/randombeer" component={RandomBeer}/>
      <Route exact path = "/beers/:id" component={Beer}/>


    </Switch>
  </div>    
  )
}

export default App;
