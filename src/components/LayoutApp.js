import React from 'react'
import { Layout, Menu } from 'antd'
import {Link} from 'react-router-dom'

const { Header, Content } = Layout;

function LayoutApp(props) {
    return (
        <Layout className="layout">
        <Header>
         <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>

        <Menu.Item key="1">
            <Link to='/'>Home</Link>
        </Menu.Item>
        
        <Menu.Item key="2">
            <Link to="/beers">All Beers</Link>
        </Menu.Item>

        <Menu.Item key="3">
            <Link to='/random'>Random Beer</Link>
        </Menu.Item>

        <Menu.Item key="4">
            <Link to='/new'>New Beer</Link>
        </Menu.Item>

        </Menu>
        </Header>
        <Content style={{ padding: ' 50px', height: "100vh"}}>
            <div className="site-layout-content"> {props.children} </div>
        </Content>
  </Layout>
    )
}

export default LayoutApp
