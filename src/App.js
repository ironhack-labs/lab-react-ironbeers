import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import './App.css';

const { Header, Content, Footer } = Layout;

function Home() {
  return <h2>Home</h2>;
}

function Beers() {
  return <h2>Beers</h2>;
}

function RandomBeer() {
  return <h2>RandomBeer</h2>;
}

function NewBeer() {
  return <h2>NewBeer</h2>;
}
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/beers">beers</Link>
            </li>
            <li>
              <Link to="/random-beer">random-beer</Link>
            </li>
            <li>
              <Link to="/new-beer">new-beer</Link>
            </li>
          </ul>
        </nav>
        <hr />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/beers">
            <Beers />
          </Route>
          <Route path="/random-beer">
            <RandomBeer />
          </Route>
          <Route path="/new-beer">
            <NewBeer />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content">Content</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
