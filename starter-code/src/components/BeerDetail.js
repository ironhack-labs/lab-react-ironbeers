import React, { useEffect, useState } from "react";
import Layout from './Layout'
import axios from "axios";
import { Container, Row, Col } from 'react-bootstrap';

const BeerDetail = (props) => {

    const [beer, setBeer] = useState([]);
    useEffect(() => {
        const id = props.match.params.id;
        const restBeersApi = axios.create({
            baseURL: `https://ih-beers-api2.herokuapp.com/beers/${id}`
        })
            
        const getListBeers = (restBeersApi) => {
            restBeersApi
            .get()
            .then(beer => setBeer(beer.data))
        }

        getListBeers(restBeersApi);
    }, []);

   
    return(beer.length == 0 ?
         <p>Loading...</p>
    :

    <Layout >
    <Container className="beer-detail-card pt-5 pb-5 pl-5 pr-5 mt-4 mb-4">
        <Row className="align-items-center">
        <Col xs={12} md={4} className="text-center">
            <img className="beer-detail-img" src={beer.image_url} alt=""/>
        </Col>
        <Col xs={12} md={8}>
            <Container className="beer-detail mt-5">
                <Row>
                    <Col xs={9}>
                        <h1>{beer.name}</h1>
                    </Col>
                    <Col xs={3} className="text-right">
                        <h2>{beer.attenuation_level}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs={9}>
                        <h3>{beer.tagline}</h3>
                    </Col>
                    <Col xs={3} className="text-right">
                        <h4>{beer.first_brewed}</h4>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} className="mt-4">
                        <p>{beer.description}</p>
                    </Col>
                </Row>
            </Container>
        </Col>
        </Row>
    </Container>   
    </Layout>  
);
    
}


export default BeerDetail;