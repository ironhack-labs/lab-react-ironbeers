import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Router from './components/Navbar/Router'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
