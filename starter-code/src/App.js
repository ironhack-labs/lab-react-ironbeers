import React, { Component } from 'react';
import HomePage from './components/HomePage'
import { BrowserRouter as Router,Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={HomePage}/>
      </Router>
    )
  }
}

export default App;
