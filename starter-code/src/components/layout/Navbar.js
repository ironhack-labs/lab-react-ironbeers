import React from 'react';
import {Link} from 'react-router-dom';
import {Icon} from 'antd';

const Navbar = ({name}) => {
  return (
    <nav
      className="container-fluid position-fixed w-100 border-bottom"
      style={{top: '0', left: '0', zIndex: '2', backgroundColor: '#3dc4fc'}}
    >
      <div className="row">
        <div className="col-12 py-4">
          <Link to="/" className="text-light text-decoration-none h5">
            {name} <Icon type="home" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
