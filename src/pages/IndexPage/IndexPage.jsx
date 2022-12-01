import './IndexPage.css';
import beers from '../../assets/beers.png'
import newBeer from '../../assets/new-beer.png'
import randomBeer from '../../assets/random-beer.png'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'


function IndexPage() {
  return (
    <>

      <Container>
        <Row>
          <Col>
            <img src={beers} alt="" />
            <br />
            <Link to='/all-beers'>All beers</Link>
          </Col>
          <img src={randomBeer} alt="" />
          <br />
          <Link to='/random-beer'>Random beer</Link>
          <Col>
          </Col>
          <Col>
            <img src={newBeer} alt="" />
            <br />
            <Link to='/create-beer'>Create beer</Link>
          </Col>
        </Row>
      </Container>

    </>

  );
}

export default IndexPage;
