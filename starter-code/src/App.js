import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Routes from "./Routes";
import HomePage from "./components/HomePage";

class App extends Component {
  render() {
    return (
     <div className= "App">
        <Navbar/>
        <HomePage/>
        <Routes/>
     </div>
    );
  }
}

export default App;
