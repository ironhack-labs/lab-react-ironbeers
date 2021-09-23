import React from "react";
import { Card } from "react-bootstrap";

function HomePageCard(props) {

    const {img, title, text} = props

    return (
            <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={img}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {text}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
}

export default HomePageCard;