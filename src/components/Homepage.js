import { Container, Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import beers from '../assets/beers.png'
import newBeer from '../assets/new-beer.png'
import randomBeer from '../assets/random-beer.png'


function Homepage() {
    return (
        <Container>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={beers} />
                <Card.Body>
                    <Card.Title>All Beers</Card.Title>
                    <Card.Text>
                        lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
                    </Card.Text>
                    <Button href="/beers" variant="primary">
                        Ir a las beers</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem', display: 'flex' }}>
                <Card.Img variant="top" src={newBeer} />
                <Card.Body>
                    <Card.Title>New beer</Card.Title>
                    <Card.Text>
                        lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
                    </Card.Text>
                    <Button href="/new-beer" variant="primary">
                        Create a new beer</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={randomBeer} />
                <Card.Body>
                    <Card.Title>Random beer</Card.Title>
                    <Card.Text>
                        lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
                    </Card.Text>
                    <Button href="/random-beer" variant="primary">
                        Random beer</Button>
                </Card.Body>
            </Card>

        </Container>
    )
}

export default Homepage