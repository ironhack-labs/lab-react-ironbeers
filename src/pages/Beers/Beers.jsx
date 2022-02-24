import './Beers.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {Container, Row, Col, Card, } from 'react-bootstrap'

import beersService from '../../services/beers.service'

function BeersPage (){

    const [beers, setBeers] = useState([])

    useEffect(()=>{
        beersService
            .getAllBeers()        
            .then(response => {
                setBeers(response.data)
            })

        // axios
        //     .get('https://ih-beers-api2.herokuapp.com/beers')
        //     .then((response)=>{
        //         setBeers(response.data)
        //     })
    }, [])

    return(
        <Container className='beers-container'>
            <Row>
                {beers.map(beer => {
                    return (
                        <Col xs={12} md={4} key={beer._id}>
                            <Link to={`/beers/${beer._id}`}>
                                <Row>
                                    <Col xs={3}><img src={beer.image_url} alt="" /></Col>
                                    <Col xs={6}>
                                        <Card border="light" style={{ width: '15rem' }}>
                                            <Card.Body>
                                                <Card.Title>{beer.name}</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">{beer.tagline}</Card.Subtitle>
                                                <Card.Text>
                                                    Created by: {beer.contributed_by}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Link>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default BeersPage