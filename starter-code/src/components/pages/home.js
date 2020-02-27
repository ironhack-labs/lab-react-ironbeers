import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './pages.css'

class HomePage extends Component {
    render() {
        return (<div>
            <Container className="all-beers">
                <Row>
                    <Col md={12}>
                        <img src="../images/beers.png" alt="All Beers" />
                        <Link to="/beers"><h1>All Beers</h1></Link>
                        <p>Lorem Ipsum Pizza Donuts Ruleta La Tartera de Sara Sin Wifi Buen Chico Jarras Pimp Flaco</p>
                    </Col>
                </Row>
            </Container>
            <Container className="random-beer">
                <Row>
                    <Col md={12}>
                        <img src="../images/random-beer.png" alt="Random Beer" />
                        <Link to="/random-beer"><h1>Random Beer</h1></Link>
                        <p>Lorem Ipsum So Party Popino Sandra Mala Cata Data Cocina Viernes Gasolina Metal Lab</p>
                    </Col>
                </Row>
            </Container>
            <Container className="new-beer">
                <Row>
                    <Col md={12}>
                        <img src="../images/new-beer.png" alt="New Beer" />
                        <Link to="/add-beer"><h1>New Beer</h1></Link>
                        <p>Lorem Ipsum So Party So Calor Armónica Traficantes de Zumos TA's Guap@s Rollercoaster</p>
                    </Col>
                </Row>
            </Container>
        </div >)
    }
}

export default HomePage