import { Container, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import beers from '../../assets/beers.png'
import newbeer from '../../assets/newbeer.png'
import randombeer from '../../assets/randombeer.png'


const HomePage = () => {

    return (

        <Container className='index-container'>

            < Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={beers} />
                <Card.Body>
                    <Card.Title className='cardTitle'>All Beers</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    < Link to="/beers" >
                        <Button variant="dark">Go somewhere</Button>
                    </Link >
                </Card.Body>
            </Card >
            <br />
            < Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={newbeer} />
                <Card.Body>
                    <Card.Title className='cardTitle'>Random Beer</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    < Link to="/random-beer" >
                        <Button variant="primary">Go somewhere</Button>
                    </Link >
                </Card.Body>
            </Card >
            <br />
            < Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={randombeer} />
                <Card.Body>
                    <Card.Title className='cardTitle'>New Beer</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    < Link to="/new-beer" >
                        <Button variant="primary">Go somewhere</Button>
                    </Link >
                </Card.Body>
            </Card >

        </Container >

    )
}

export default HomePage

