import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import beers from './../../assets/beers.png'
import newbeer from './../../assets/newbeer.png'
import randombeer from './../../assets/randombeer.png'

const IndexPage = () => {

    return (
        <Container>
            <Row>
                <Col md={{ span: 8, offset: 2 }} className="ColIndexBeers">
                    <img style={{ width: '100%' }} src={beers} alt="" />
                    <Link to="/beers">All Beers </Link>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequuntur blanditiis quo repudiandae odio fugiat doloribus nihil eaque animi expedita vero?</p>
                </Col>
                <Col md={{ span: 8, offset: 2 }} className="ColIndexBeers">
                    <img style={{ width: '100%' }} src={randombeer} alt="" />
                    <Link to="/random-beer">Random Beers</Link>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequuntur blanditiis quo repudiandae odio fugiat doloribus nihil eaque animi expedita vero?</p>
                </Col>
                <Col md={{ span: 8, offset: 2 }} className="ColIndexBeers">
                    <img style={{ width: '100%' }} src={newbeer} alt="" />
                    <Link to="/new-beer">New Beer</Link>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequuntur blanditiis quo repudiandae odio fugiat doloribus nihil eaque animi expedita vero?</p>
                </Col>


            </Row>
        </Container>
    )
}

export default IndexPage