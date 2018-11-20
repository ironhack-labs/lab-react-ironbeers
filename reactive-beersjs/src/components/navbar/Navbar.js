import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){

      return(
        <nav className="nav-style">
          <ul>
            <li>Welcome to Beer.js</li>
            <li><Link to='/'> Beers </Link></li>
            <li><Link to='/randombeer' style={{ textDecoration: 'none' }}>Random Beer</Link></li>
            <li><Link to='/makebeer'> Add a new Beer! </Link></li>
          </ul>
        </nav>
      )
  }
}

export default Navbar;