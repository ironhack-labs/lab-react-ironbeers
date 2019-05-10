import React from 'react'
import {Menu, Icon} from 'antd'
import {Link} from 'react-router-dom'



function NavBar () {
  return (
    <Menu
    mode = "horizontal"
    theme = "dark"
    >
      <Menu.Item key="Home">
      <Link to ={'/'}>
       <Icon type="home" theme="twoTone"  />
       </Link>
      </Menu.Item>
    </Menu>

  )
}

export default NavBar