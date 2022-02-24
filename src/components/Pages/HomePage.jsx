import { Link } from 'react-router-dom'
import { Card, Container } from 'react-bootstrap'
import beers from '../../assets/beers.png'
import newBeer from '../../assets/new-beer.png'
import randomBeer from '../../assets/random-beer.png'

function HomePage() {

    return (
        <Container>
            <Card >
                <Card.Img variant="top" src={beers} />
                <Card.Body className='links'>
                    <Link to='/beers' >
                        <Card.Title>All Beers</Card.Title>
                    </Link>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>

                </Card.Body>
            </Card>

            <Card >
                <Card.Img variant="top" src={randomBeer} />
                <Card.Body>
                    <Link to='/random-beer'>
                        <Card.Title>Random Beer</Card.Title>
                    </Link>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card >
                <Card.Img variant="top" src={newBeer} />
                <Card.Body>
                    <Link to='/new-beer'>
                        <Card.Title>New Beer</Card.Title>
                    </Link>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>

                </Card.Body>
            </Card>
        </Container>
    )
}

export default HomePage