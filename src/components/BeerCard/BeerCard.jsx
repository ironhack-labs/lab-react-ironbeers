import './BeerCard.css'
import { Link } from "react-router-dom"
import { Card } from 'react-bootstrap'


const BeerCard = ({ beer }) => {

    return (
        <div className="beerCard">
            <Link to={`/beers/${beer._id}`}>

                <Card>
                    <Card.Img variant="top" src={beer.image_url} />
                    <Card.Body>
                        <Card.Title className="info">{beer.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{beer.tagline}</Card.Subtitle>
                        <Card.Text>Created by: {beer.contributed_by} </Card.Text>
                    </Card.Body>
                </Card >


            </Link>
        </div>
    )
}

export default BeerCard