import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Nav from './Nav';
import Beers from './Beers';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/beers" component={Beers} />
        {/* <Route path="/random-beer" component={RandomBeer} />
        <Route path="/new-beer" component={NewBeer} /> */}
      </div>
    </Router>
  );
}

export default App;
