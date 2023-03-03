import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import beer from './../../assets/beers.png'
import newBeer from './../../assets/new-beer.png'
import randomBeer from './../../assets/random-beer.png'


const HomePage = () => {

    return (

        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Link to="/beers">
                        <img src={beer} alt="beers" />
                        <h1>All Beers</h1>
                        <p> All Beers. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus delectus dolore tempora amet accusantium, illum officiis, veritatis sit in ipsa deleniti facilis praesentium tempore, qui tenetur commodi dicta quae nostrum? </p>
                    </Link>

                    <hr />

                    <Link to="/new-beer">
                        <img src={newBeer} alt="newBeer" />
                        <h1>New Beer</h1>
                        <p> New Beer. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus delectus dolore tempora amet accusantium, illum officiis, veritatis sit in ipsa deleniti facilis praesentium tempore, qui tenetur commodi dicta quae nostrum? </p>
                    </Link>

                    <hr />

                    <Link to="/random-beer">
                        <img src={randomBeer} alt="randomBeer" />
                        <h1>Random Beer</h1>
                        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus delectus dolore tempora amet accusantium, illum officiis, veritatis sit in ipsa deleniti facilis praesentium tempore, qui tenetur commodi dicta quae nostrum? </p>
                    </Link>
                </Col>
            </Row>
        </Container>

    )
}

export default HomePage