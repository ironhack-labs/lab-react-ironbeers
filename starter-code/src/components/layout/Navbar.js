import React from 'react';
import {Link} from 'react-router-dom';
import {Icon} from 'antd';

const Navbar = () => {
  return (
    <div className="logo" style={{textAlign: 'center', color: 'white'}}>
      <Link to="/">
        <Icon type="home" />
      </Link>
    </div>
  );
};

export default Navbar;
