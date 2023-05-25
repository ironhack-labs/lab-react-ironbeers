import { Link } from 'react-router-dom'
import { Card, Button, Container } from "react-bootstrap"
import randomBeer from './../../assets/random-beer.png'

const RandomBeerCard = () => {

    return (

        <Card className="mb-3 homePageCard">
            <Card.Img variant="top" src={randomBeer} />
            <Card.Body>
                <Card.Title>
                    <Link to="/random-beer" className="h1-link">
                        <h1>Random beer</h1>
                    </Link>
                </Card.Title>
                <Card.Text>
                    Surprise!!!!!!
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default RandomBeerCard