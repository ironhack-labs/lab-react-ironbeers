import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from "./components/homePage/HomePage";
import BeerList from "./components/beerList/BeerList";
import Beer from "./components/beer/Beer";


function App() {
  return (
    <div className="App">
      <div className="App__content">
          <Switch>
            <Route path="/beers" exact component={BeerList} />
            <Route path="/beers/:beerId" component={Beer} />
            {/* <Route path="/random-beer" component={RandomBeer} />
            <Route path="/new-beer" component={NewBeer} /> */}
            <Route path="/" exact component={HomePage} />
          </Switch>
      </div>
    </div>
  );
}

export default App;
