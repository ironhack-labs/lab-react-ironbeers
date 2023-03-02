import { Card, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import './BeerCard.css'

const BeerCard = ({ image_url, name, tagline, contributed_by, _id }) => {
    return (

        <Link to={`/details/${_id}`}>
            <Card className='mb-3'>
                <Card.Img className="BeerCard" variant="top" src={image_url} />
                <Card.Body>
                    <Card.Text>{name}</Card.Text>
                    <Card.Text>{tagline}</Card.Text>
                    <Card.Text>{contributed_by}</Card.Text>
                </Card.Body>
            </Card>
        </Link>

    )
}

export default BeerCard