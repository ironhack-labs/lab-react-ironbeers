import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import './index.css'

const Index = () => {
    return (
        <main>
            <Link to='/beers' as="div">
                <Card className="card">
                    <Card.Img variant="top" src="./../images/beers.png" />
                    <Card.Body>
                        <Card.Title>All Beers</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
            </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
            <Link to='/random-beer' as="div">
                <Card className="card">
                    <Card.Img variant="top" src="./../images/random-beer.png" />
                    <Card.Body>
                        <Card.Title>Random Beer</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
            </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
            <Link to='/new-beer' as="div">
                <Card className="card">
                    <Card.Img variant="top" src="./../images/new-beer.png" />
                    <Card.Body>
                        <Card.Title>New Beer</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
            </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </main>
    )
}

export default Index