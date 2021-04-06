import React from 'react';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import BeerList from './components/BeerList'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Header />
    <Router>
        <Switch>
          <Route path="/beers">
            <BeerList />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
