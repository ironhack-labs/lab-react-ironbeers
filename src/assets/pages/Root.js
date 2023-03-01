import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { HomePage } from './HomePage'


function Root() {
  return (
    
   <Layout>
            <Navbar />
            <Content
                    style={{
                    height: "100vh",
                    maxHeight: "calc(100vh - 128.09px)",
                    padding: "1em 2em",
                    overflow: "scroll"
                    }}>
            <Outlet/> 
            </Content>

    </Layout>
    
  )
}

export default Root