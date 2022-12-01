import newBeer from "../../assets/new-beer.png"
import randomBeer from "../../assets/random-beer.png"
import beer from "../../assets/beers.png"
import { Card, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function HomePage() {

    return (
        <div>
            <div className="row">
                <Card style={{ width: '40rem' }}>
                    <Card.Img variant="top" src={newBeer} />
                    <Card.Body>
                        <Card.Title>New Beer</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, quae quibusdam, tenetur ipsa consectetur numquam placeat ducimus sint animi omnis aliquid expedita aut aspernatur nostrum dolores eius officiis ad! Suscipit?
                        </Card.Text>
                        <Link to="/new-beer">
                            <Navbar.Brand as="div">New Beer</Navbar.Brand>
                        </Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '40rem' }}>
                    <Card.Img variant="top" src={beer} />
                    <Card.Body>
                        <Card.Title>Beer</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, quae quibusdam, tenetur ipsa consectetur numquam placeat ducimus sint animi omnis aliquid expedita aut aspernatur nostrum dolores eius officiis ad! Suscipit?
                        </Card.Text>
                        <Link to="/beers">
                            <Navbar.Brand as="div">beer</Navbar.Brand>
                        </Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '40rem' }}>
                    <Card.Img variant="top" src={randomBeer} />
                    <Card.Body>
                        <Card.Title>Random Beer</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, quae quibusdam, tenetur ipsa consectetur numquam placeat ducimus sint animi omnis aliquid expedita aut aspernatur nostrum dolores eius officiis ad! Suscipit?
                        </Card.Text>
                        <Link to="/random-beer">
                            <Navbar.Brand as="div">Random Beer</Navbar.Brand>
                        </Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default HomePage