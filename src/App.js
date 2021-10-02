import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import AllBeers from './components/allbeers';
import { Header } from './components/Header';
import NewBeer from './components/newbeer';
import RandomBeer from './components/randombeer';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/allbeers">
          <AllBeers />
        </Route>
        <Route path="/randombeer">
          <RandomBeer />
        </Route>
        <Route path="/newbeer">
          <NewBeer />
        </Route>
      </Switch>

      <div>
        <Header />
        <Link to="/allbeers">All Beers</Link>
        <Link to="/ramdombeer">Random Beer</Link>
        <Link to="/newbeer">New Beer</Link>
      </div>
    </BrowserRouter>
  );
}

export default App;
