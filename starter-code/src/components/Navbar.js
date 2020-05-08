import React from 'react';
import { withRouter } from 'react-router-dom'

import { Menu } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

function Navbar( { history } ) {
  const goTo = (path) => history.push(path);

  return (
    <Menu
      style={{ backgroundColor: 'blue', display: 'flex', justifyContent: 'center', color: 'white' }}
    >
      <Menu.Item onClick={() => goTo('/')} key="home" icon={ <HomeOutlined/> }>
        Home
      </Menu.Item>
    </Menu>
  );
}

export default withRouter(Navbar);