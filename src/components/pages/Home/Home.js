import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BeersImg from './beers.png'
import RandomBeerImg from './random-beer.png'
import NewBeerImg from './new-beer.png'



function Home() {
  return (
    <Container>
        <Row>
            <Col md="4">
                <img src={BeersImg} alt="Beers" />
                <Link to={"/beers"}><h2>All Beers</h2></Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at aliquam mauris. Maecenas gravida sed neque eget fringilla. Mauris eget vulputate dolor, in commodo libero. </p>
            </Col>
            <Col md="4">
                <img src={RandomBeerImg} alt="Beers" />
                <Link to={"/random-beer"}><h2>Random Beers</h2></Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at aliquam mauris. Maecenas gravida sed neque eget fringilla. Mauris eget vulputate dolor, in commodo libero. .</p>
            </Col>
            <Col md="4">
                <img src={NewBeerImg} alt="Beers" />
                <Link to={"/new-beer"}><h2>New Beer</h2></Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at aliquam mauris. Maecenas gravida sed neque eget fringilla. Mauris eget vulputate dolor, in commodo libero.</p>
            </Col>
        </Row>
    </Container>
  );
}

export default Home;