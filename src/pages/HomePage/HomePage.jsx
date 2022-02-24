import { Link } from 'react-router-dom'
import { Container, Card, Button } from 'react-bootstrap'
import './HomePage.css'
import img1 from './../../assets/beers.png'
import img2 from './../../assets/new-beer.png'
import img3 from './../../assets/random-beer.png'



const HomePage = () => {

    return (
        <Container>
            <Link to='/beers'>
                <Card style={{ width: '65rem' }}>
                    <Card.Img variant="top" src={img1} />
                    <Card.Body>
                        <Card.Title>All beers</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nisi beatae recusandae sequi quia nihil, enim optio id vel quae, earum numquam cum necessitatibus ab culpa vitae ducimus molestias temporibus.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>

            <br />
            <Link to='/random-beer'>
                <Card style={{ width: '65rem' }}>
                    <Card.Img variant="top" src={img2} />
                    <Card.Body>
                        <Card.Title>Random Beer</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nisi beatae recusandae sequi quia nihil, enim optio id vel quae, earum numquam cum necessitatibus ab culpa vitae ducimus molestias temporibus.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>

            <br />
            <Link to='/new-beer'>
                <Card style={{ width: '65rem' }}>
                    <Card.Img variant="top" src={img3} />
                    <Card.Body>
                        <Card.Title>New Beer</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam nisi beatae recusandae sequi quia nihil, enim optio id vel quae, earum numquam cum necessitatibus ab culpa vitae ducimus molestias temporibus.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>

        </Container>
    )
}

export default HomePage