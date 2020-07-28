import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import RandomBeer from './Components/RandomBeer';
import NewBeer from './Components/NewBeer';
import BeerDetails from './Components/BeerDetails'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/randomBeer" component={RandomBeer} />
          <Route path="/newBeer" component={NewBeer} />
          <Route path="/:id" component={BeerDetails} />
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
