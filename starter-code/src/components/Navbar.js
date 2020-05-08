import React from 'react'
import { Menu } from 'antd'
import { withRouter } from 'react-router-dom'
import { HomeOutlined, PlusOutlined, AreaChartOutlined } from '@ant-design/icons'

function Navbar({ history }) {
  const goTo = (path) => history.push(path)

  return (
    <Menu mode="horizontal">
      <Menu.Item onClick={() => goTo('/')} key="home" icon={<HomeOutlined />}></Menu.Item>
    </Menu>
  )
}

export default withRouter(Navbar)
