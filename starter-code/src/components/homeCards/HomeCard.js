import React from 'react'
import Card  from 'react-bootstrap/Card'

import './HomeCard.css'

const HomeCard = (props) => {

    return (
        <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={props.img} className="home-card-img"/>
            <Card.Body>
                <Card.Title as={"h2"}>{props.title}</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae at culpa ipsa ratione eligendi architecto.
            </Card.Text>
            </Card.Body>
        </Card>
    )

}

export default HomeCard