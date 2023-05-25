import { Card, Button } from "react-bootstrap"
import '../pages/HomePage/pages.css'

import { Link } from "react-router-dom"

const BeerCard = ({ image_url, name, tagline, contributed_by, _id }) => {

    return (
        <Card className="mb-3 ">
            <Card.Img className="beer" variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <div className="d-grid">
                    <Link to={`/${_id}`} className="btn btn-dark btn-sm">Detalles</Link>
                </div>
                <p>{tagline}</p>
                <p>{contributed_by}</p>
            </Card.Body>
        </Card>
    )
}

export default BeerCard