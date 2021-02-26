import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/beers" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
