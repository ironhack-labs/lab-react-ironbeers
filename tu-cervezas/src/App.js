import React, { Component } from 'react';
//import Navbar from './components/Navbar';
import BeerList from './components/BeerList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BeerList />
      </div>
    );
  }
}

export default App;
