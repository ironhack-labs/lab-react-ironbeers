import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav>
      <Link to={`/`}>
          <span>header</span>
      </Link>
      
    </nav>
  );
};

export default Header;