import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Beers from './components/Allbeers';



function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/beers">
          <Beers />
        </Route>
      </Switch>
    </>
  );
}

export default App;
