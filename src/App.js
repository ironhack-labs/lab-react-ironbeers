import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import HomePage from './components/HomePage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <HomePage />
        </div>
      </Router>
    );
  }
}

export default App;
