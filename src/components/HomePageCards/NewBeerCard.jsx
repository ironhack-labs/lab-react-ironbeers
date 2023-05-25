import { Link } from 'react-router-dom'
import { Card, Button, Container } from "react-bootstrap"
import newBeer from './../../assets/new-beer.png'

const NewBeerCard = () => {

    return (

        <Card className="mb-3 mt-10 homePageCard">
            <Card.Img variant="top" src={newBeer} />
            <Card.Body>
                <Card.Title>
                    <Link to="/new-beer" className="h1-link">
                        <h1>New beer</h1>
                    </Link>
                </Card.Title>
                <Card.Text>
                    The process of making beer is known as brewing.
                    A dedicated building for the making of beer is called a brewery,
                    though beer can be made in the home and has been for much of its history
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default NewBeerCard