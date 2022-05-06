import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const SingleBeer = ({ name, image_url, _id }) => { console.log('holaaaa', _id)
    return (
        <Card>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Link to={`/${_id}`}>
                    <div>
                        <Button variant="dark">Ver detalles</Button>
                    </div>
                </Link>
            </Card.Body>
        </Card >
    )
}

export default SingleBeer

