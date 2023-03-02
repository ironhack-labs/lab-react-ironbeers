import { Container, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import beerHome from '../../assets/beers.png'
import beerRandomHome from '../../assets/random-beer.png'
import newBeerHome from '../../assets/new-beer.png'

const HomePage = () => {

    return (
        <Container className="HomePage">

            <h1>Home Page</h1>
            <hr />
            <Link to={"/beers"}>
                <Card className='mb-3'>
                    <Card.Img variant="top" src={beerHome} />
                    <Card.Body>
                        <Card.Text>BEERS</Card.Text>
                    </Card.Body>
                </Card>
            </Link>

            <Link to={"/random-beer"}>
                <Card className='mb-3 '>
                    <Card.Img variant="top" src={beerRandomHome} />
                    <Card.Body>
                        <Card.Text>RANDOM BEER</Card.Text>
                    </Card.Body>
                </Card>
            </Link>

            <Link to={"/new-beer"}>
                <Card className='mb-3'>
                    <Card.Img variant="top" src={newBeerHome} />
                    <Card.Body>
                        <Card.Text>NEW BEER</Card.Text>
                    </Card.Body>
                </Card>
            </Link>



        </Container>
    )
}

export default HomePage

