import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import './BeersCard.css'


const BeersCard = ({ image_url, name, tagline, contributed_by, _id }) => {

    return (
        <Link to={`/details/${_id}`}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{tagline}</Card.Text>
                    <Card.Text>{contributed_by}</Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default BeersCard