import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Homepage from './components/Homepage'
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import ListBeers from './components/ListBeers'

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route exact path="/" component={Homepage} />
        <Route exact path='/beers' component={ListBeers} />
      </Router>
    </div>
  );
}

export default App;
