import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import images from '../assets/beers.png'
import newBeer from '../assets/new-beer.png'
import randomBeer from '../assets/random-beer.png'

function HomePage() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={images} />
            <Card.Body>
                <Card.Title>All Beers</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Doloremque eveniet quis tenetur, laboriosam repellendus quidem.
                    Aliquid quasi perspiciatis modi dolores itaque fugit,
                    rerum suscipit nisi hic neque iusto quo quaerat?
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <Link to="/beers">
                    All Beers
                </Link>
            </Card.Body>
            <Card.Img variant="top" src={newBeer} />
            <Card.Body>
                <Card.Title>Random Beer</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Doloremque eveniet quis tenetur, laboriosam repellendus quidem.
                    Aliquid quasi perspiciatis modi dolores itaque fugit,
                    rerum suscipit nisi hic neque iusto quo quaerat?
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <Link to="/random-beer">
                    Random Beer
                </Link>
            </Card.Body>
            <Card.Img variant="top" src={randomBeer} />
            <Card.Body>
                <Card.Title>New Beer</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Doloremque eveniet quis tenetur, laboriosam repellendus quidem.
                    Aliquid quasi perspiciatis modi dolores itaque fugit,
                    rerum suscipit nisi hic neque iusto quo quaerat?
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <Link to="/new-beer">
                    New Beer
                </Link>
            </Card.Body>
        </Card>

    );
}
export default HomePage;


