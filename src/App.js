import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, useLocation, Link } from 'react-router-dom';
import { Button, Layout } from 'antd';
import HomePage from './screens/HomePage.jsx';
import Beers from './screens/Beers.jsx';
import SingleBeer from './screens/SingleBeer.jsx';
const { Header, Footer, Sider, Content } = Layout;

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Layout style={{ minHeight: '100%' }}>
        {location.pathname !== '/' ? (
          <Header style={{ position: 'sticky', top: 0, zIndex: 1, marginBottom: 20 }}>
            <Button type="primary">
              <Link to="/">HOME</Link>
            </Button>
          </Header>
        ) : null}

        <Content style={{ minHeight: '100%' }}>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/beers" exact>
              <Beers />
            </Route>
            <Route path="/beers/:beerId" exact component={SingleBeer} />

            <Route path="/random-beer"></Route>
            <Route path="/new-beer"></Route>
          </Switch>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
