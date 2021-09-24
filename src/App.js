import React from 'react';
import './App.css';
import HomePage from './components/pages/HomePage/HomePage';
import BeersPage from './components/pages/BeersPage/index'
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route exact path="/" render={() => <HomePage />} />
      <Route exact path="/allBeers" render={() => <BeersPage />} />
    </div>
  );
}

export default App;
