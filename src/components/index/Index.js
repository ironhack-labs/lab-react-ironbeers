import React from 'react'
import { Link } from 'react-router-dom'
import './Index.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import { Col } from 'react-bootstrap'


export default () => {

    return (

        <>
            
            <h1>React IronBeers</h1>

            <Container >
                
                <Row className="indexRow">
                    
                    <Col sm={12}>
                    
                        <img src="https://media-cdn.tripadvisor.com/media/photo-s/1b/78/81/ac/jabeerwocky-craft-beer.jpg" alt="beerBar" /> 

                        <Link to='/getAllBeers'>

                            <Button>See the list of all beers</Button>

                        </Link>
                        
                    </Col>
                    
                    <Col Col sm={12} >
              
                        <img src="https://media-cdn.tripadvisor.com/media/photo-s/15/1d/3b/ab/local-craft-beers.jpg" alt="beerBar" />

                        <Link to='/getRandomBeer'>

                            <Button>See random beer</Button>

                        </Link>
                        
                    </Col>

                    <Col Col sm={12}>
                        
                        <img src="https://cdn.tasteatlas.com/images/ingredients/a7770feb8a734794ae714d9a2d7e30a4.jpg?w=600&h=450" alt="beerBar" />
                            
                        <Link to='/createBeer'>

                            <Button>Create a beer</Button>

                        </Link>
                        
                    </Col>
                    
                </Row>

            </Container>
        
        </>

    )
}