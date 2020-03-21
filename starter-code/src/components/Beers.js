import React, { useEffect, useState } from "react";
import Layout from './Layout'
import axios from "axios";
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Beers = () => {

    const [beers, setBeers] = useState([]);
    useEffect(() => {
        const restBeersApi = axios.create({
            baseURL: `https://ih-beers-api2.herokuapp.com/beers`
        })
            
        const getListBeers = (restBeersApi) => {
            restBeersApi
            .get()
            .then(beers => setBeers(beers.data))
            
        }

        getListBeers(restBeersApi);
    }, []);

   
    return(beers.length == 0 ?
         <p>Loading...</p>

    :
        
            <Layout>
                
                        <Container fluid>
                            <Row>
                            {
                beers.map(beer => {
                    return(
                        
                                <Col lg={4} md={6} xs={12}>
                                <Link to={`/beers/${beer._id}`} ><Container className="beer-item mb-2 mt-2">
                            <Row className="mt-4 mb-4 align-items-center">
                                <Col xs={4} className="text-center">
                                    <img className="beer-item-img" src={beer.image_url} alt={beer.name}/>
                                </Col>
                                <Col xs={8}>
                                    <div className="beer-item-descr">
                                    <h3>{beer.name}</h3>
                                    <h4>{beer.tagline}</h4>
                                    <p><b>Created by:</b> {beer.contributed_by}</p>
                                    </div>
                                    
                                </Col>
                            </Row>
                        </Container></Link>
                                </Col>
                    ) 
                })
                }
                </Row>
                        </Container>
            </Layout>
            
        );
    
}


export default Beers;