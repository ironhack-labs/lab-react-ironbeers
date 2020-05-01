import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../App.css';


class Nav extends Component {
  render() {
    return (
      <div>
        <Link to='/' className='home-link-img'>Home</Link>
      </div >
    )
  }
}

export default Nav;
//withRouter es una función y le pasamos el componente