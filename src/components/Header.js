import React from 'react';
import { HomeOutlined } from '@ant-design/icons';

import { Link } from 'react-router-dom';
//#3DC4FC
const Header = () => {
  return (
    <Link
      to={`/`}
      style={{ backgroundColor: 'blue', width: '100vw', height: '30px' }}
    >
      <center>
        <HomeOutlined style={{ fontSize: '32px' }} />
      </center>
    </Link>
  );
};

export default Header;
