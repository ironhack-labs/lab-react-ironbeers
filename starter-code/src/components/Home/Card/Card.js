import React from 'react'
import Card from 'react-bootstrap/Card'

const homeCard = props => {
    return (
        <Card style={ { width: '18rem', height: '30%', marginBottom: '15px' } }>
            <Card.Img variant="top" src={ props.img } alt={ props.title } />
            <Card.Body>
                <Card.Title>{ props.title }</Card.Title>
                <Card.Text>{ props.description }</Card.Text>
            </Card.Body>
        </Card>
    )
}
export default homeCard