import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './views/Home';
import BeerList from './views/BeerList';
import RandomBeer from './views/RandomBeer';
import NewBeer from './views/NewBeer';
import SingleBeer from './views/SingleBeer';


function App() {
  return (
    <div className="App">
    <div className="App">
      <BrowserRouter >
        <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/beers" component={BeerList} exact />
        <Route path="/random-beer" component={RandomBeer} exact />    
        <Route path="/new-beer" component={NewBeer} exact /> 
        <Route path="/beers/:beerId" component={SingleBeer} exact />               
      </Switch>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
