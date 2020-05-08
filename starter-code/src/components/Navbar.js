import React from 'react'
import { HomeOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import { withRouter } from 'react-router-dom'

function Navbar({ history }) {
  const goTo = (path) => history.push(path)

  return (
    <Menu
      style={{ backgroundColor: 'blue', display: 'flex', justifyContent: 'center', color: 'white' }}
    >
      <Menu.Item
        style={{ listStyleType: 'none' }}
        onClick={() => goTo('/')}
        key="home"
        icon={<HomeOutlined />}
      ></Menu.Item>
    </Menu>
  )
}

export default withRouter(Navbar)
