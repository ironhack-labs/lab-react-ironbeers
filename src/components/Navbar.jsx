import React from 'react'
import {Menu} from 'antd'
import { Link } from 'react-router-dom'
import { Header } from 'antd/es/layout/layout'

function Navbar() {
  const pages = [
    { name: "Home", path: "/" },
    { name: "Beers", path: "/beers" }
  ]
  
  return (
    <div className="Header">
    <Header >  
        <Menu
          theme="dark"
          mode="horizontal" className='MenuBar'>
          <Link to={'/'}>
            <div className='iconHome'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6" style={{width:'32px'}}>
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
            </div>
          </Link>

        </Menu>    
    </Header>
    </div>
  
  )
}

export default Navbar