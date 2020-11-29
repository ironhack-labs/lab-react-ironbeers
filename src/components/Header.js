import React from 'react'
import {Link} from 'react-router-dom'

import {HomeOutlined} from '@ant-design/icons'
import { Menu, Layout} from 'antd'
const {Header}=Layout

function Headers() {
    return (
        <div>
             <Header>
               
               <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{textAlign:"center"}}>
               <Link to={'/'}>
           <Menu.Item key="1" icon={<HomeOutlined/>}></Menu.Item>
           </Link>
         </Menu>
               </Header>
            
        </div>
    )
}

export default Headers
