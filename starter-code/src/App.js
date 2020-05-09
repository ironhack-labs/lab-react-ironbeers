import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Routes from "./Routes";
import HomePage from "./components/HomePage";
import Beers from "./components/Beers"

class App extends Component {
    render() {
      return (
        <div>
         <Navbar/>
         <HomePage/>
         <Beers/>
         <Routes/>
        </div> 
    )
  }
}

export default App;
