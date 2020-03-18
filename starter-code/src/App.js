import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home as HomePage } from './pages/Home';
import { Layout } from './layouts/Layout';
import { GlobalStyle } from './styles/Global';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact component={HomePage} />
          </Switch>
        </Layout>
      </Router>
    </>
  );
};
