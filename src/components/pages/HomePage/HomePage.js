import React from 'react'
import { Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'




export default function HomePage() {


    return (
    <div>
        <div>
            <Card style={{ width: '18rem' }}>
            <Link to="/beers">
            <Card.Img variant="top" src="beers.png"/>
            </Link>
            <Card.Body>
                <Card.Title>All Beers</Card.Title>
                <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda laudantium voluptate sapiente deserunt autem
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
        <div>
            <Card style={{ width: '18rem' }}>
            <Link to="/random-beer">
            <Card.Img variant="top" src="beers.png"/>
            </Link>
            <Card.Body>
                <Card.Title>Random Beer</Card.Title>
                <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda laudantium voluptate sapiente deserunt autem
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
        <div>
            <Card style={{ width: '18rem' }}>
            <Link to="/new-beer">
                <Card.Img variant="top" src="beers.png"/>
            </Link>
            <Card.Body>
                <Card.Title>New Beer</Card.Title>
                <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda laudantium voluptate sapiente deserunt autem
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    </div>
    )
}
