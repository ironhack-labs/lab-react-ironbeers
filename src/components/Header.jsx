import React from 'react';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <Link to="/"><FontAwesomeIcon icon={faHome} style={{ color: '#FFF', height: 'px' }} /></Link>
      
    </div>
  );
};

export default Header;
