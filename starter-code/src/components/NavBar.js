
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
    <nav className="navbar navbar-light">
      <Link to='/'>Home</Link>
    </nav>
    )
  }
}

export default NavBar;
