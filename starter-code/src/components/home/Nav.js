import React from 'react'
import { NavLink } from 'react-router-dom'
import { Icon } from 'antd'

function Nav() {
  return (
    <NavLink exact to="/">
      <div
        style={{
          marginLeft: '15%',
          width: '70%',
          background: '#3dc4fc',
          height: '6vh',
          textAlign: 'center'
        }}>
        <Icon type="home" style={{ color: 'white', fontSize: 30, marginTop: 5 }} />
      </div>
    </NavLink>
  )
}

export default Nav
