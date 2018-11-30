import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'; 
import Router from './Router';
import '../src/App.css'


class App extends Component {
  render() {
    return (
      <div className="App">
      <Router/>
      </div>
    );
  }
}

export default App;
