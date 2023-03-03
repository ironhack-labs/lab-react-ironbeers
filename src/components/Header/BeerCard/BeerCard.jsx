import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './BeerCard.css'

const BeerCard = ({ image_url, name, _id }) => {
    return (
        <Link to={"/"}>
            <Card className='mb-3 BeerCard'>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Text>{name}</Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default BeerCard