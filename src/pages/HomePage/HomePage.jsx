import { Button, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import beersImg from '../../assets/beers.png'
import randomImg from '../../assets/random-beer.png'
import newbeerImg from '../../assets/new-beer.png'

const HomePage = () => {
    return (
        <Container>

            <Row>

                <Col md={{ span: 6, offset: 3 }}>

                    <h1>IRONBEERS REACT</h1>
                    <hr />
                    <img src={beersImg} alt="beers" style={{ width: '100%' }} />
                    <Link to="/beers">
                        <Button variant="dark">All Beers</Button>
                    </Link>
                </Col>
                <Col md={{ span: 6, offset: 3 }}>
                    <img src={randomImg} alt="beers" style={{ width: '100%' }} />
                    <Link to="/random-beer">
                        <Button variant="dark">Random Beer</Button>
                    </Link>
                </Col>
                <Col md={{ span: 6, offset: 3 }}>
                    <img src={newbeerImg} alt="beers" style={{ width: '100%' }} />
                    <Link to="/new-beer">
                        <Button variant="dark">New Beer</Button>
                    </Link>
                </Col>
            </Row >

        </Container >
    )
}


export default HomePage