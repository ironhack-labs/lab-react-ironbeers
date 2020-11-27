import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { HomeFilled } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

export default function LayoutApp({ children }) {
  const history = useHistory();
  return (
    <Layout className="layout">
      <Header style={{}}>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ margin: '0 auto' }}
        >
          {history.location.pathname !== '/' ? (
            <Menu.Item key="1">
              <Link to="/">
                <HomeFilled />
              </Link>
            </Menu.Item>
          ) : (
            <p style={{ color: '#f0f2f5' }}>IronBeers v2.0</p>
          )}
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px', minHeight: '85vh' }}>
        {children}
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Created by{' '}
        <a href="https://github.com/Francisco-Vivas">Francisco Vivas</a>
      </Footer>
    </Layout>
  );
}
