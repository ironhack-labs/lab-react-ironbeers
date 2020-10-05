import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import AllBeers from './Components/AllBeers/AllBeers';
import NewBeer from './Components/NewBeer/NewBeer';
import RandomBeer from './Components/RandomBeer/RandomBeer';
import SingleBeer from './Components/SingleBeer/SingleBeer';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/beers" component={AllBeers} />
          <Route exact path="/random-beer" component={RandomBeer} />
          <Route exact path="/beers/:id" component={SingleBeer} />
          <Route exact path="/new-beer" component={NewBeer} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
