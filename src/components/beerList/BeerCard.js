import React from 'react'
import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Col } from 'react-bootstrap'

export default ({ name, _id, image_url, tagline, contributed_by }) => {
    
    return ( 
        <>
            
            <Col sm={6}>

                <Card className="beerCard">

                    <Card.Img variant="top" src={image_url} style={{height: '180px', objectFit: 'cover'}} />
                        
                    <Card.Body>
                    
                        <h4>{name}</h4>

                        <p>Created by: {contributed_by}</p>

                        <p>{tagline}</p>
                    
                        <Link to={`/${_id}`}>
                        
                            <Button variant="dark" size="sm" block>See this beer</Button>
                    
                        </Link>
                
                    </Card.Body>

                </Card>

            </Col>

        </>
    )
}
