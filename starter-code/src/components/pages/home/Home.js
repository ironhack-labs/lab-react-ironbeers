import React, { Component } from 'react';
import HomeCard from "../../HomeCard/HomeCard"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'




class Home extends Component {
    render() {
        return (
            <Container as="main">
                <Row>
                    <Link to={`/allBeers`}>
                        <HomeCard title="All Beers" imageUrl="/images/beers.png" text="This is the link for all beers" />
                    </Link>

                    <Link to={`/random`}>
                        <HomeCard title="Random Beer" imageUrl="/images/random-beer.png" text="Get a random beer from our catalog" />
                    </Link>

                    {/* <Link to="#">
                        <HomeCard title="Add New Beer" imageUrl="/images/new-beer.png" text="Insert new beer to our catalog" />
                    </Link> */}

                </Row>
            </Container>

        );
    }
}

export default Home;