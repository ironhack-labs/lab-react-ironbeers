import { Card, Button } from "react-bootstrap"
import './BeersCard.css'
import { Link } from "react-router-dom"

const BeersCard = ({ image_url, name, tagline, contributed_by, _id }) => {

    return (
        <Card className="mb-3 BeersCard">

            <div className="d-grid">
                <Link to={`/beers/${_id}`}><Card.Img variant="top" src={image_url} /></Link>
            </div>

            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{tagline}</Card.Text>
                <Card.Text>{contributed_by}</Card.Text>

            </Card.Body>
        </Card>
    )
}
export default BeersCard