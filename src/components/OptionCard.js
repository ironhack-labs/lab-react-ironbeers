import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'

//IT-1, 11.
const OptionCard = ({link, image, title, description}) => {
    return (
        <div className='option-cards'>
            <Link to={link}>
                <Card>
                    <Card.Img variant="top" src={image} alt="options-img"/>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    )
}

export default OptionCard
