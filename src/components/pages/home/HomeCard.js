import React from 'react' 
import { Link } from 'react-router-dom' 

import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const HomeCard = (props) => {
    return (
        
        <Col sm={12} md={4}>
            <Link to={props.link}>
                <Card className='text-dark'>
                    <Card.Img variant='top' src={props.image} />
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text className="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget fermentum magna, ut viverra ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
        
    )
}

export default HomeCard
