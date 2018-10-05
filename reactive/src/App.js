import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Routes from './Routes';
import {NavLink, withRouter} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <NavLink to='/'>Home</NavLink>
        </nav>

       <Routes />
      </div>
    );
  }
}

export default withRouter(App);
