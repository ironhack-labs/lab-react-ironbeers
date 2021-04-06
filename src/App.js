import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Router from './components/Navbar/Router'

function App() {
  console.log('ojo')
  return (
    <div className="App">
      <Navbar />
      <Router />
    </div>
  );
}

export default App;
