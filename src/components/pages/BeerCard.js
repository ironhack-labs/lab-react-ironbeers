import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const BeerCard = ({ image_url, name, tagline, contributed_by, _id }) => {

    return(

        <Link to={`/beers/${_id}`}>
            <Card>
                <Row>
                    <Col>
                      <Card.Img className='pics 'variant="top" src={image_url}/>  
                    </Col>
                    <Card.Body>
                       <Card.Title>
                       {name}
                       </Card.Title>
                       <Card.Text>
                        {tagline}
                       </Card.Text>
                       <Card.Text>
                        {contributed_by}
                       </Card.Text>
                    </Card.Body>
                </Row>
            </Card>
        </Link>
    )
}

export default BeerCard