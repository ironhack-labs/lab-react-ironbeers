import React from 'react'
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'




export default function LinkToHome() {
  return (
    <Link to="/">
    <Menu style={{display:'flex',alignItems:'center', justifyContent:'center', marginBottom:'5vh'}} mode="horizontal">
      <Menu.Item key="">
        <Icon type="home" />
        Home
      </Menu.Item>
    </Menu>
    </Link>
  );
  }