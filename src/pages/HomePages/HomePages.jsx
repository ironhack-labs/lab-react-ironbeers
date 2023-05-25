import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import beers from '../../assets/beers.png'
import newBeers from '../../assets/new-beer.png'
import randomBeers from '../../assets/random-beer.png'
import BeerCard from "../../components/BeerCard/BeerCard"

const HomePage = () => {

    return (
        <Container>

            <Row>
                <Col>
                    <h1>IronBeers</h1>
                    <hr />
                </Col>
            </Row>

            <br />

            <Row>
                <Col className="col-12 col-md-4 mb-3">
                    <Link to="/beer">
                        <BeerCard image_url={beers} name={'Beers'} />
                    </Link>
                </Col>
                <Col className="col-12 col-md-4 mb-3">
                    <Link to="/new-beer">
                        <BeerCard image_url={newBeers} name={'New Beer'} />
                    </Link>
                </Col>
                <Col className="col-12 col-md-4 mb-3">
                    <Link to="/random-beer">
                        <BeerCard image_url={randomBeers} name={'Random Beers'} />
                    </Link>
                </Col>
            </Row>

        </Container>
    )
}

export default HomePage