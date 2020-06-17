import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

function Home() {
    return (
        <Container fluid={true}>
            <div class='from-navbar'>
                <h1>Welcome to IronBeers!</h1>
            </div>
            <Row xs="1" sm="1" md="3">
                <div>
                    <NavLink to="/beers">
                        <img style={{width:'80%'}} src={process.env.PUBLIC_URL + "/images/beers.png"} alt="beers" />
                        <h3>All Beers</h3>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/random-beer">
                        <img style={{width:'80%'}} src={process.env.PUBLIC_URL + "/images/random-beer.png"} alt="beers" />
                        <h3>Random Beer</h3>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/new-beer">
                        <img style={{width:'80%'}} src={process.env.PUBLIC_URL + "/images/new-beer.png"} alt="beers" />
                        <h3>New Beer</h3>
                    </NavLink>
                </div>
            </Row>
        </Container>
    )
}

export default Home;