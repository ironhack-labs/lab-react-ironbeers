import React, { Component } from 'react';
import { Switch,Route } from 'react-router-dom';
import { Link } from 'react-router-dom';



class Navbar extends Component {
  render() {
    return (
      <div className="home">
      
        <ul>
          <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
        </ul>
      
      
      </div>
    );
  }
}

export default Navbar;