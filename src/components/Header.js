import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import house from '../assets/house.png';

function Header(props) {
  return (
    <div className="header">
      <nav>
      
        <Link to="/"><img src={house} style={{height:'4vh'}}/></Link>
      </nav>
    </div>
  );
}

export default Header;
