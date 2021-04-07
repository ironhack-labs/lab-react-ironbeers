import React from 'react';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import BeerList from './components/BeerList'
import BeerDetail from './components/BeerDetail'
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
          <Route exact path="/beers/:id" component={BeerDetail} />
          <Route exact path="/beers" component={BeerList} />
          <Route exact path="/" component={Home} />
        </Switch>
    </Router>
    </div>
  );
}

export default App;
