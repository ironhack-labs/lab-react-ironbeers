import React from 'react'
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function HomePageCard(props) {
    return (
        <div>
            <Link to={`/${props.route}`} >
                <Card className="home-page-card">
                    <Card.Img variant="top" src={props.imgSrc} className="home-card-img" />
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                            {props.text}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    )
}
