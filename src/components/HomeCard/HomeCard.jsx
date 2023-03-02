import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import '../HomeCard/HomeCard.css'

const HomeCard = ({ name, img, link }) => {
    return (
        <Link to={`/${link}`} className='HomeCard'>
            <Card style={{ margin: '20px' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis aspernatur ex esse cumque, omnis quia illo modi eos ratione. Magnam, veniam. Sed, praesentium? Necessitatibus animi quas nulla laudantium nisi!
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    );
}

export default HomeCard