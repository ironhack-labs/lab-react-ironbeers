import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import Beers from './views/Beers/Beers';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/random-beer">
        <Home />
      </Route>
      <Route exact path="/new-beer">
        <Home />
      </Route>
      <Route exact path="/beers">
        <Beers />
      </Route>
    </BrowserRouter>
  );
}

export default App;
