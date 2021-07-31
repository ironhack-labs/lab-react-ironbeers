import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from "./Components/Home"
import BeerList from "./Components/BeerList"
import RandomBeer from "./Components/RandomBeer"
import NewBeer from "./Components/NewBeer"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/beerlist" component={BeerList}/>
          <Route exact path="/random-beer" component={RandomBeer}/>
          <Route exact path="/new-beer" component={NewBeer}/>
        </switch>      
      </BrowserRouter>
    </div>
  );
}

export default App;
