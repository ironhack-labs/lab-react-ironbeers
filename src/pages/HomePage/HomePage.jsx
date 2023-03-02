import { Link } from "react-router-dom"
import HomeCard from "../../components/HomeCard/HomeCard"
import beersImg from './../../assets/beers.png'
import randomBeerImg from './../../assets/random-beer.png'
import newBeerImg from './../../assets/new-beer.png'
import './HomePage.css'
import { Col, Container, Row } from "react-bootstrap"


const HomePage = () => {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={{ span: 4 }}>
                    <Link to="/beers"><HomeCard img={beersImg} name={"All beers"} /></Link>
                </Col>
                <Col md={{ span: 4 }}>
                    <Link to="/random-beer"><HomeCard img={randomBeerImg} name={"Random beer"} /></Link>
                </Col>
                <Col md={{ span: 4 }}>
                    <Link to="/new-beer"><HomeCard img={newBeerImg} name={"New beer"} /></Link>
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage