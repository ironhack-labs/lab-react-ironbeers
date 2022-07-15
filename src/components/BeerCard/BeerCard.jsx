import { Link } from "react-router-dom"
import { Card, Container } from 'react-bootstrap'


const BeerCard = (beer) => {

    return (
        <Container>
            <Card>
                <Link to={`/beers/${beer._id}`}><Card.Img variant="top" src={beer.image_url} /></Link>
                <Card.Body>
                    <Card.Title className="info">{beer.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{beer.tagline}</Card.Subtitle>
                    <Card.Text>Created by: {beer.contributed_by} </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default BeerCard