import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import Homepage from "./pages/Homepage"
import Header from "./components/Header"
import allbeers from "./pages/all.beers"
import randomBeer from "./pages/random.beer"
import newBeer from "./pages/new.beer"




function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header />

    <Route exact path="/" component= {Homepage} />



    <Switch>

    <Route exact path="/beers" component= {allbeers} />
    <Route exact path="/random-beer" component= {randomBeer} />
    <Route exact path="/new-beer" component= {newBeer} />


    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
