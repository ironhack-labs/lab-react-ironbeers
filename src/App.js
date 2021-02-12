import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from './components/HomePage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import AllBeers from './components/AllBeers';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/beers" component={AllBeers} />
        {/* <Route path="/random-beer" component={RandomBeer} />
        <Route path="/new-beer" component={NewBeer} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
