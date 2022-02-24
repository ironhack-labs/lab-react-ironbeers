import { Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import beers from '../../assets/beers.png'
import rndmBeer from '../../assets/random-beer.png'
import newBeer from '../../assets/new-beer.png'

const HomePage = () => {

    return (
        <Container>
            <h1>Página de Cervezas</h1>
            <hr />
            <>
                <Card>
                    <Card.Img variant="top" src={beers} />
                    <Card.Body>
                        <Link to="/beers"><Card.Title>All Beers</Card.Title></Link>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Card>
                    <Card.Img variant="top" src={rndmBeer} />
                    <Card.Body>
                        <Link to="/random-beer" ><Card.Title>Random Beer</Card.Title></Link>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br />
                <Card>
                    <Card.Img variant="top" src={newBeer} />
                    <Card.Body>
                        <Link to="/new-beer"><Card.Title>Create new</Card.Title></Link>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </>
        </Container>
    )
}

export default HomePage

