import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../App.css';

class Header extends Component {
  render(){
    return(
      <div className='Header'>
        <Link to='/'><img className='home' src='/images/home.png' alt='home' /></Link>
      </div>
    )
  }
}

export default Header; 