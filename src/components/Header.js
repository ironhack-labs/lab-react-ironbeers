import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import {Link, NavLink} from "react-router-dom"
import {
    HomeOutlined
  } from "@ant-design/icons"

  const { Header, Content, Footer } = Layout;



const HeaderLayout = (props) => {
    return (
        <div>
            <Layout className="layout">
                <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Link to="/">
                    <Menu.Item key="1">Home</Menu.Item>
                    </Link>
                    
                </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                   
                    {props.children}
                    
                </Content>
                <Footer style={{ textAlign: 'center' }}> ©2020 Created by Ironhack</Footer>
            </Layout>
        </div>
    )
}

export default HeaderLayout
