import React from 'react';
import { Link } from 'react-router-dom';
import {getUser} from '../utils/auth';

const Navbar = () => {
  let user = getUser();
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" className="navbar-menu">
        {user ? 
          <div className="navbar-start">
            <div className="navbar-item">
                <p>welcome {user.firstname}</p>
            </div>
            <p className="navbar-item"><Link to='/'>Home</Link></p>
            <p className="navbar-item"><Link to='/user/profile' >Profile</Link></p>
            <p className="navbar-item"><Link to='/user/logout' >Logout</Link></p>
            
          </div>
          :
          <div className="navbar-start">
            <div className="navbar-item">
                <p>welcome Guest</p>
            </div>
            <p className="navbar-item"><Link to='/'>Home</Link></p>
            <p className="navbar-item"><Link to='/user/signup'>Signup</Link></p>
            <p className="navbar-item"><Link to='/user/login' >Login</Link></p>
            
          </div>
        }
        
      </div>
    </nav>
  )
}

export default Navbar;
