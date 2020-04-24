import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import Nav from './components/Nav'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav />
      <Home />
      </div>
    );
  }
}

export default App;
