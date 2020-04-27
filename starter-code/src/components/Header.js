import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="header">
         <Link to='/'><img className='home-link-img'  src="/images/home.png" alt=""/></Link>
      </header>
    );
  }
}

export default Header;