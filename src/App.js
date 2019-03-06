import React, { Component } from 'react';
import './App.css';
import Router from "./Router";
import Navbar from "./Component/Home";

class App extends Component {


  render() {
    return (
      <div className="App ">
        <Router/>
      </div>
    );
  }
}

export default App;
