import React from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import { Header } from 'antd/es/layout/layout'
import {HomeOutlined} from '@ant-design/icons'

function navbar() {
  return (
    <div>
        <Header>
            <Menu  theme="dark"
          mode="horizontal">
            <Link to={'/'}><HomeOutlined /></Link>
          </Menu>
          
        </Header>
    </div>
  )
}

export default navbar