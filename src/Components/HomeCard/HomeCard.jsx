import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom'
import beers from './../../assets/beers.png'
import randomBeer from './../../assets/random-beer.png'
import newBeer from './../../assets/new-beer.png'

function HomeCard() {
    return (
        <CardGroup>
            <Card>
                <Link to="/beers" >
                    <Card.Img variant="top" src={beers} />
                </Link>
                <Card.Body>
                    <Card.Title>All Beers</Card.Title>
                    <Card.Text>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Link to="/random">
                    <Card.Img variant="top" src={randomBeer} />
                </Link>
                <Card.Body>
                    <Card.Title>Random Beer</Card.Title>
                    <Card.Text>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Link to="/new">
                    <Card.Img variant="top" src={newBeer} />
                </Link>
                <Card.Body>
                    <Card.Title>New Beer</Card.Title>
                    <Card.Text>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
    );
}

export default HomeCard;