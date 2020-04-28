import React, { Component, Fragment } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
    <Fragment>
      <Router>
        <Nav />
        <Route path='/' component={HomePage}/>
      </Router>
    </Fragment>
    );
  }
}

export default App;
