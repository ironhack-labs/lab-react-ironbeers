import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import imgBeers from "../../assets/beers.png"
import imgNewBeer from "../../assets/new-beer.png"
import imgRandomBeer from "../../assets/random-beer.png"
import MyCard from "../../components/MyCard/MyCard"


const HomePage = () => {

    return (
        <Container>

            <Row>
                <Col>

                    <Link to={"/beers"}>
                        <MyCard img={imgBeers} title="All Beers" />
                    </Link>

                </Col>
            </Row>


            <Row>
                <Col>
                    <Link to={"/random"}>

                        <MyCard img={imgNewBeer} title="Random Beers" />
                    </Link>


                </Col>
            </Row>


            <Row>
                <Col>
                    <MyCard img={imgRandomBeer} title="New Beer" />
                </Col>
            </Row>

        </Container>
    )
}

export default HomePage