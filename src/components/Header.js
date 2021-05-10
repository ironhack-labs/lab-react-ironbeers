import React from 'react';
import './Header.css'
import homeIcon from '../assets/home.png'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='navBackground'>
        <a href="/">
          <img src={homeIcon} alt="home" />
        </a>
      </div>
    );
  }
}

export default Header;