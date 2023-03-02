import './BeerCard.css'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BeerCard = ({ beer }) => {

    return (
        <>
            <Link to={`/beers/${beer._id}`}>
                <Card className='p-3'>
                    <Card.Img variant="top" src={beer.image_url} className='beerCardImage' />
                    <Card.Body>
                        <Card.Title>{beer.name}</Card.Title>
                        <hr />
                        <Card.Text>{beer.tagline}</Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </>
    )
}

export default BeerCard
