import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// CSS
import './styles.scss';

// Layout
import { Layout } from './layouts/Layout';

// Pages
import { Home } from './pages/Home';
import { Beers } from './pages/Beers';
import { BeerDetails } from './pages/BeerDetails';

export const App = () => {

    return (
        <Router>
            <Layout>
                <Switch>
                    <Route path="/" exact component={() => <Home />} />
                    <Route path="/beers/:beerId" component={() => <BeerDetails />} />
                    <Route path="/beers" component={() => <Beers />} />
                    <Route path="/random-beer" component={() => <BeerDetails random={true} />} />
                </Switch>
            </Layout>
        </Router>
    );
}

export default App;
