import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


import './App.css'
import HomeBeers from './beers/home-beers'
import AllBeers from './beers/all-beers';

function App() {
    return (
        <>
            <Container as="main" className="app-page">
                <Row>
                    <Link to='/'>Home</Link>
                    <hr></hr>
                </Row>


                <Row>
                    <Switch>
                        <Route exact path="/" component={HomeBeers} />
                        <Route exact path="/beers" component={AllBeers} />
                        <Route path="/beers/:id" />
                        <Route path="/randombeer" />
                        <Route exact path="/newbeer" />
                    </Switch>
                </Row>
            </Container>
        </>
    );
}

export default App;
