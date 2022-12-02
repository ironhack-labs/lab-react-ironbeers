import './home.css'
import image from '../../assets/beers.png'
import newBeer from '../../assets/new-beer.png'
import randomBeer from '../../assets/random-beer.png'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

import { Link } from 'react-router-dom'

function BeersCard() {
    return (

        <div>
            <Card className="mb-4 CoasterCard">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>All Beers</Card.Title>
                    <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam leo dolor, molestie vel magna nec, dapibus feugiat nisi. Donec ultricies est ac dui faucibus pulvinar. </Card.Text>
                    <Link to={`/listado`}>
                        <div className="d-grid">
                            <Button variant="dark" size="sm">Ver detalles</Button>
                        </div>
                    </Link>
                </Card.Body>
            </Card>

            <Card className="mb-4 CoasterCard">
                <Card.Img variant="top" src={newBeer} />
                <Card.Body>
                    <Card.Title>Random Beers</Card.Title>
                    <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam leo dolor, molestie vel magna nec, dapibus feugiat nisi. Donec ultricies est ac dui faucibus pulvinar. </Card.Text>
                    <Link to={`/detalles`}>
                        <div className="d-grid">
                            <Button variant="dark" size="sm">Ver detalles</Button>
                        </div>
                    </Link>
                </Card.Body>
            </Card>

            <Card className="mb-4 CoasterCard">
                <Card.Img variant="top" src={randomBeer} />
                <Card.Body>
                    <Card.Title>New Beer</Card.Title>
                    <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam leo dolor, molestie vel magna nec, dapibus feugiat nisi. Donec ultricies est ac dui faucibus pulvinar. </Card.Text>
                    <Link to={`/detalles`}>
                        <div className="d-grid">
                            <Button variant="dark" size="sm">Ver detalles</Button>
                        </div>
                    </Link>
                </Card.Body>
            </Card>

        </div >


    );
}

export default BeersCard