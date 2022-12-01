import { Row, Col, Button } from "react-bootstrap"
import beersImg from './../../assets/beers.png'
import newBeerImg from './../../assets/new-beer.png'
import randomBeerImg from './../../assets/random-beer.png'
import { Link } from 'react-router-dom'



const HomePage = () => {
    
    return (

        <>
    
            <Row className="d-flex justify-content-center text-center">
                <Col className="mb-3" md={{span: 12}}>
                    <img src={beersImg} alt="beers" />
                </Col>
                <Col className="mb-3" md={{ span: 6 }}>
                    <Link className="link-decoration" to='/all'>
                    <div className="d-grid">
                        <Button variant="outline-dark" size='lg'>Nuestras cervezas</Button>
                    </div>
                    </Link>
                    <hr />
                </Col>
            </Row>

            <Row className="d-flex justify-content-center text-center">
                <Col className="mb-3" md={{span: 12}}>
                    <img src={newBeerImg} alt="beers" />
                </Col>
                <Col className="mb-3" md={{ span: 6 }}>
                    <Link className="link-decoration" to='/new-beer'>
                    <div className="d-grid">
                        <Button variant="outline-dark" size='lg'>Añade tu cerveza</Button>
                    </div>
                    </Link>
                    <hr />
                </Col>
            </Row>
            
            <Row className="d-flex justify-content-center text-center">
                <Col className="mb-3" md={{span: 12}}>
                    <img src={randomBeerImg} alt="beers" />
                </Col>
                <Col className="mb-3" md={{ span: 6 }}>
                    <Link className="link-decoration" to='/random'>
                        <div className="d-grid">
                            <Button variant="outline-dark" size='lg'>Cerveza aleatoria</Button>
                        </div>
                    </Link>
                    <hr />
                </Col>
            </Row>
        </>

    )
}

export default HomePage