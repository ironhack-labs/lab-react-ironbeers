import React from 'react';
import { Link } from 'react-router-dom';

const logoStyle = {
  width: '50px'
};
function Navbar(){
  return (
    <nav style={{ textAlign: 'center', padding: '10px', backgroundColor: 'white' }}>
      <Link to="/">
        <img src="https://cdn-icons-png.flaticon.com/512/5973/5973800.png" alt="Home" style={logoStyle} />
      </Link>
    </nav>
  );
};

export default Navbar;
