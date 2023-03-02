import { Container, Card, Row, Col, Button } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import beersSrc from '../../assets/beers.png'
import randomSrc from '../../assets/random-beer.png'
import newBeerSrc from '../../assets/new-beer.png'
import './HomePage.css'


const HomePage = () => {

    return (
        <Container>

            <h1 className='m-5'>IronBeers</h1>

            <Card className='mb-3'>
                <Card.Img variant="top" src={beersSrc} />
                <Link to="/beers" className='link'>
                    <Card.Body>
                        <Card.Title>All Beers</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam blanditiis est voluptatibus! Saepe facere placeat optio magni! Corrupti itaque culpa ratione omnis, repellat beatae odio, cum temporibus cupiditate vitae nulla.
                        </Card.Text>
                    </Card.Body>

                </Link>
            </Card>

            <Card className='mb-3'>
                <Card.Img variant="top" src={randomSrc} />
                <Link to="/random-beer" className='link'>
                    <Card.Body>
                        <Card.Title>Random Beer</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam blanditiis est voluptatibus! Saepe facere placeat optio magni! Corrupti itaque culpa ratione omnis, repellat beatae odio, cum temporibus cupiditate vitae nulla.
                        </Card.Text>
                    </Card.Body>

                </Link>
            </Card>

            <Card className='mb-3'>
                <Card.Img variant="top" src={newBeerSrc} />
                <Link to="/new-beer" className='link'>
                    <Card.Body>
                        <Card.Title>New Beer</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam blanditiis est voluptatibus! Saepe facere placeat optio magni! Corrupti itaque culpa ratione omnis, repellat beatae odio, cum temporibus cupiditate vitae nulla.
                        </Card.Text>
                    </Card.Body>

                </Link>
            </Card>
        </Container>
    )
}

export default HomePage