import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const Home = props => {
    return (
        
        <>
        <Container>
      <h1>Iron Beers</h1>
      <Row className="justify-content-center">
      <Col md={4}>
    <img class="principalimg" src="../../images/beers.png"></img>
    <h3>All Beers</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit fames ad, senectus aliquet sodales vehicula nulla maecenas inceptos ac, sem tortor quis taciti non felis morbi vivamus. Facilisi ad congue torquent mollis rhoncus morbi maecenas elementum</p>
    <Button as="div" variant="dark" size="sm">
                    <Link to="/beers">Ir</Link>
                </Button>
      </Col>
      <Col md={4}>
    <img class="principalimg" src="../../images/random-beer.png"></img>
    <h3>Random Beer</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit fames ad, senectus aliquet sodales vehicula nulla maecenas inceptos ac, sem tortor quis taciti non felis morbi vivamus. Facilisi ad congue torquent mollis rhoncus morbi maecenas elementum</p>
    <Button as="div" variant="dark" size="sm">
                    <Link to="/random-beers">Ir</Link>
                </Button>
      </Col>
      <Col md={4}>
    <img class="principalimg" src="../../images/new-beer.png"></img>
    <h3>New Beer</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit fames ad, senectus aliquet sodales vehicula nulla maecenas inceptos ac, sem tortor quis taciti non felis morbi vivamus. Facilisi ad congue torquent mollis rhoncus morbi maecenas elementum</p>
    <Button as="div" variant="dark" size="sm">
                    <Link to="/new-beer">Ir</Link>
                </Button>
      </Col>

      </Row>
      </Container>
        
        </>
    )
}

export default Home