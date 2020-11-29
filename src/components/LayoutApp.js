import { Layout, Menu } from 'antd';
import {Link} from 'react-router-dom'
import React from 'react'

const { Header, Content, Footer } = Layout;

export default function LayoutApp({children}) {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">
              <Link to={'/'}>Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to={'/beers'}>All Beers</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to={'/random'}>Random Beer</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to={'/new-beer'}>New Beer</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to={'/search'}>Search beer</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>footer:p</Footer>
      </Layout>
    );
}