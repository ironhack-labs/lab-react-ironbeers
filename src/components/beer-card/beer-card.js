import { Card, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './beer-card.css'

const BeerCard = ({ name, tagline, img, id }) => {

    return (
        <Col md='4'>
            <Card style={{ width: '18rem' }}>

                <Card.Img className='list-img' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {tagline}
                    </Card.Text>
                    <Card.Text>
                        Created by: {name}
                    </Card.Text>
                    <Link to={`/beers/${id}`}>Details</Link>
                </Card.Body>
            </Card>
        </Col >
    )
}

export default BeerCard