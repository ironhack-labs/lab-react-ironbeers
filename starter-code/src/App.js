import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import NavBar from './components/navBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Home />
      </div>
    );
  }
}

export default App;
