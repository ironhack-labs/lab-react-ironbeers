import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import './BeerCard.css'
const BeerCard = ({ image_url, name, tagline, contributed_by, _id }) => {


    return (
        <Card className="mb-3 BeerCard">
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <p>{tagline}</p>
                <p>{contributed_by}</p>
                <div className="d-grid">
                    <Link to={`/beers/${_id}`} className="btn btn-dark btn-sm">Details</Link>
                </div>
            </Card.Body>
        </Card>
    )
}


export default BeerCard