import React from 'react';
import './App.css';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import HomePage from './components/HomePage';
import SingleBeer from './components/SingleBeer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/Beers" component={Beers} />
          <Route exact path="/Beers/:beerId" component={SingleBeer} />
          <Route exact path="/RandomBeer" component={RandomBeer} />
          <Route exact path="/NewBeer" component={NewBeer}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

