
import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import BeersService from '../../../services/services';

const BeersPage = () => {
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        BeersService
            .getBeers()
            .then(({ data }) => { setBeers(data) })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <Container className='beer'>
            <Row>
                {beers.map(beer => (
                    <Col key={beer._id} md={4}>
                        <Card>
                            <Card.Img variant="top" src={beer.image_url} />
                            <Card.Body>
                                <Card.Title>{beer.name}</Card.Title>
                                <Card.Text>{beer.tagline}</Card.Text>
                                <Card.Text>
                                    <small>Contributed by: {beer.contributed_by}</small>
                                </Card.Text>
                                <Link to={`/beers/${beer._id}`}>
                                    <Button variant="primary">See details</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default BeersPage