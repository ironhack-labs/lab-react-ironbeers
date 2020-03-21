import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// CSS
import './styles.scss';

// Layout
import { Layout } from './layouts/Layout';

// Pages
import { Home } from './pages/Home';
import { Beers } from './pages/Beers';

export const App = () => {

    return (
        <Router>
            <Layout>
                <Route path="/" exact component={() => <Home />}></Route>
                <Route path="/beers" component={() => <Beers />}></Route>
            </Layout>
        </Router>
    );
}

export default App;
