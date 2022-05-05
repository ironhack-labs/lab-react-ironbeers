import { Card, Container, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import beers from './../assets/beers.png'
import newbeer from './../assets/new-beer.png'
import randombeer from './../assets/random-beer.png'

const HomePage = () => {

    return (
        <Container>
            <Row>
                <Card class='card'>
                    <Card.Img class='beer' variant="top" src={beers} />
                    <Card.Body>
                        <Card.Text>
                            <Link to="/beers">
                                <Button variant="dark" size='lg'>Beers</Button>
                            </Link>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
            <Row>
                <Card class='card'>
                    <Card.Img class='beer' variant="top" src={newbeer} />
                    <Card.Body>
                        <Card.Text>
                            <Link to="/new-beer">
                                <Button variant="dark" size='lg'>New Beer</Button>
                            </Link>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
            <Row>
                <Card class='card'>
                    <Card.Img class='beer' variant="top" src={randombeer} />
                    <Card.Body>
                        <Card.Text>
                            <Link to="/random-beer">
                                <Button variant="dark" size='lg'>Random Beer</Button>
                            </Link>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    )
}

export default HomePage