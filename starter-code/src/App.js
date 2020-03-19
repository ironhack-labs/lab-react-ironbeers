// dependencies
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// local modules
import { Layout } from './layouts/Layout';
import { Home as HomePage } from './pages/Home';
import { BeersList as BeersPage } from './components/BeersList';
import { BeerDetail as BeerDetailPage } from './components/BeerDetail';

// styled components
import { GlobalStyle } from './styles/Global';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Layout>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/beers" exact component={BeersPage} />
            <Route path="/beers/:id" exact component={BeerDetailPage} />
          </Switch>
        </Layout>
      </Router>
    </>
  );
};
