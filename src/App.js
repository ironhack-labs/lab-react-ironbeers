import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import HomeMenu from './components/HomeMenu';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="container">
      <Router>
        <HomeMenu />
      </Router>
      </div>
    </div>
  );
}

export default App;
