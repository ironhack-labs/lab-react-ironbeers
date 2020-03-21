import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// CSS
import './styles.scss';

// Pages
import { Layout } from './layouts/Layout';
import { Home } from './pages/Home';

export const App = () => {
    return (
        <Layout>
            <Router>
                <Route path="/" exact component={() => <Home />}></Route>
            </Router>
        </Layout>
    );
}

export default App;
