import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// CSS
import './styles.scss';

// Layout
import { Layout } from './layouts/Layout';

// Components
import ScrollToTop from './components/helpers/ScrollToTop';

// Pages
import { Home } from './pages/Home';
import { Beers } from './pages/Beers';
import { BeerDetails } from './pages/BeerDetails';
import { NewBeer } from './pages/NewBeer';

export const App = () => {

    return (
        <Router onUpdate={() => window.scrollTo(0, 0)} >
            <ScrollToTop />
            <Layout>
                <Switch>
                    <Route path="/" exact component={() => <Home />} />
                    <Route path="/beers/:beerId" component={() => <BeerDetails />} />
                    <Route path="/beers" component={() => <Beers />} />
                    <Route path="/random-beer" component={() => <BeerDetails random={true} />} />
                    <Route path="/new-beer" component={() => <NewBeer />} />
                </Switch>
            </Layout>
        </Router>
    );
}

export default App;
