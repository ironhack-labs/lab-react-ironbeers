import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import beersService from '../../../services/services';



const BeerDetail = () => {
    const [beer, setBeer] = useState({})
    const { id } = useParams()

    useEffect(() => {
        beersService
            .getBeers()
            .then(({ data }) => { setBeer(data) })
            .catch((error) => { console.log(error); });
    }, [id]);

    return (
        <Container>
            <Row>
                <Col md={4}>
                    <Image src={beer.image_url} fluid />
                </Col>
                <Col md={8}>
                    <h1>{beer.name}</h1>
                    <p>{beer.tagline}</p>
                    <p>First brewed: {beer.first_brewed}</p>
                    <p>Attenuation level: {beer.attenuation_level}</p>
                    <p>{beer.description}</p>
                    <p>Contributed by: {beer.contributed_by}</p>
                </Col>
            </Row>
        </Container>
    );
};




export default BeerDetail
