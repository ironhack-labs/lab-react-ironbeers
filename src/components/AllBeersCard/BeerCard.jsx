import { Link } from 'react-router-dom'
import { Card, Button, Container, Row, Col } from "react-bootstrap"



const BeerCard = ({ name, image_url, tagline, contributed_by, _id }) => {
    // console.log(beers)
    return (
        <Card className="mb-3 p-3 AllBeersCard">
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text> {tagline} </Card.Text>
                <Card.Text> {contributed_by} </Card.Text>

                <div className="d-grid">
                    <Link to={`/details/${_id}`} className="btn btn-dark btn-sm">Detalles</Link>
                </div>
            </Card.Body>
        </Card>
    )
}

export default BeerCard


