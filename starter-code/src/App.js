import React, { Component } from 'react';
import './App.css';
// import AllBeers from "./Components/AllBeers"
// import NewBeer from "./Components/NewBeer"
// import RandomBeer from "./Components/RandomBeer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// import Links from "./Components/Links"
// import SingleBeer from "./Components/SingleBeer"
import Navbar from "./components/NavBar/NavBar"
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <Navbar />
      </div>  
      </Router>
    );
  }
}

export default App;


