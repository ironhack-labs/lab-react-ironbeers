import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBeer } from '@fortawesome/free-solid-svg-icons'

//IT-1, 11.
const OptionCard = ({link, image, title, description}) => {
    return (
        <div className='option-cards'>
            <Link to={link}>
                <Card>
                    <Card.Img variant="top" src={image} alt="options-img"/>
                    <Card.Body>
                    
                        <Card.Title><FontAwesomeIcon icon={faBeer} /> {title}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    )
}

export default OptionCard
