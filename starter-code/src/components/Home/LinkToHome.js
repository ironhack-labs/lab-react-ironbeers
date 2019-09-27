import React from 'react'
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'




export default function LinkToHome() {
  return (
    <Link to="/">
    <Menu style={{display:'flex',alignItems:'center', justifyContent:'center', marginBottom:'5vh', width:'100vw', background:'rgb(0, 174, 255)'}} mode="horizontal">
      <Menu.Item key="" style={{color: 'white'}}>
        <Icon type="home" style={{color: 'white'}} />
        Home
      </Menu.Item>
    </Menu>
    </Link>
  );
  }