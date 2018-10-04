import React from 'react';
import { Link } from 'react-router-dom';
//import Navbar from './Navbar';

const Header = () => {
    let width = {width: 600, height: 100, background: 'blue'}
    let widthimg = {width: 20, height: 20}
  return (
    <div style={width} className="main">
        <div>
            <Link to='/'>
                <img  style={widthimg} src='https://cdn1.iconfinder.com/data/icons/freeline/32/home_house_real_estate-512.png' alt="" />
            </Link>
        </div>
    </div>
  )
}

export default Header;
