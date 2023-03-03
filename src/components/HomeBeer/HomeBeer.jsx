import Card from 'react-bootstrap/Card'
import beers from '../../assets/beers.png'
import newBeer from '../../assets/new-beer.png'
import randomBeer from '../../assets/random-beer.png'
import { Link } from 'react-router-dom'
// import coastersService from "../../services/coasters.services"



const HomeBeer = () => {
    return (
        <>
            <Link to="/allBeers" style={{ textDecoration: 'none', color: 'black' }}>
                <Card>
                    <Card.Img variant="top" src={beers} />
                    <Card.Body>
                        <Card.Title className="card-title-lg">All Beers</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio officia perspiciatis
                            placeat blanditiis neque aspernatur sed debitis, quibusdam iure distinctio.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
            <Link to="/randomBeer" style={{ textDecoration: 'none', color: 'black' }}>
                <Card>
                    <Card.Img variant="top" src={newBeer} />
                    <Card.Body>
                        <Card.Title className="card-title-lg">Random Beer</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio officia perspiciatis
                            placeat blanditiis neque aspernatur sed debitis, quibusdam iure distinctio.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
            <Link to="/newBeer" style={{ textDecoration: 'none', color: 'black' }}>
                <Card>
                    <Card.Img variant="top" src={randomBeer} />
                    <Card.Body>
                        <Card.Title className="card-title-lg">New Beer</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio officia perspiciatis
                            placeat blanditiis neque aspernatur sed debitis, quibusdam iure distinctio.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </>
    )
}


export default HomeBeer

