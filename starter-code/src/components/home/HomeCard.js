import React from 'react'

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'



const HomeCard = ({ image, title, url }) => {

    return (

        <Card>
            <Link to={url}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
                 </Card.Text>
                </Card.Body>
            </Link>
            <hr />
        </Card>
    )

}

export default HomeCard