import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const BeerCard = ({ name, image_url, _id }) => {

    return (
        <Card className="mb-3 BeerCard">
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <div className="d-grid">
                    <Link to={`/detalles/${_id}`} className="btn btn-dark btn-sm">Detalles</Link>
                </div>
            </Card.Body>
        </Card>
    )
}

export default BeerCard