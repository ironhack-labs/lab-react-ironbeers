import React, { Component } from 'react';
import homeIcon from '../assets/homeIcon.png'
import homeIcon2 from '../assets/589-5898244_icon-white-house-home-icon-white-png-transparent.png'
import homeIcon3 from "../assets/casa.png"
import { Link } from 'react-router-dom'
class Header extends Component {
  state = {  }
    
  render() { 
    return (
      <div>
      <nav class="navbar text-center navbar-dark bg-primary">
      <div className='position-relative top-50 start-50'>
       <Link to='/'><img src={homeIcon3} width="30" height="30" class="d-inline-block align-top" alt=""/> </Link>

      </div>
       
     
    </nav>
    </div>
      );
  }
}
 
export default Header ;