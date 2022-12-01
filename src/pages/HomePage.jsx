
import { Container, Card, } from 'react-bootstrap';
import { Link } from 'react-router-dom'

import beers from './../assets/beers.png'
import randomBeer from './../assets/random-beer.png'
import newBeer from './../assets/new-beer.png'



const HomePage = () => {
    return (
        <Container>
            <Link to="/beers">
                <Card className='cards' style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={beers} />
                    <Card.Body>
                        <Card.Title>All Beers</Card.Title>
                        <Card.Text>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
            <hr />
            <Link to="/random">
                <Card className='cards' style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={randomBeer} />
                    <Card.Body>
                        <Card.Title>Random Beer</Card.Title>
                        <Card.Text>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
            <hr />
            <Link to="/new">
                <Card className='cards' style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={newBeer} />
                    <Card.Body>
                        <Card.Title>New Beer</Card.Title>
                        <Card.Text>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>



        </Container>
    );
}

export default HomePage;




