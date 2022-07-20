import React from 'react';
import { Link } from "react-router-dom";     // <== IMPORT
 
function Navbar() {
  return (
    <nav className="Navbar">
      <ul>
        <Link to="/"> Home </Link>           {/* <== ADD */}
          {/* <== ADD */}
      </ul>
    </nav>
  );
}
 
export default Navbar;