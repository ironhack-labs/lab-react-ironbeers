import React from 'react';
import Header from './Components/Header';
import Home from './pages/Home';
import Beers from "./pages/Beers";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";
import BeerDetails from "./pages/BeerDetails";
import './app.css';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Beers} />
          <Route path="/beers/:id" component={BeerDetails} />
          <Route path="/random-beer" component={RandomBeer} />
          <Route path="/new-beer" component={NewBeer} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
