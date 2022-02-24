import { Button, Row, Col, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import beersImageOne from "./../../assets/beers.png"
import beersImageTwo from "./../../assets/new-beer.png"
import beersImageThree from "./../../assets/random-beer.png"

const IndexPage = () => {


    return (

        <Container>
            <Row>
                <Link to="/">
                    <span>Aqui va la navbar go back</span>
                </Link>
                <hr />

                <Col className="indexCol">
                    <img src={beersImageOne} />
                    <Link to="/beers">
                        <h2>All Beers</h2>
                    </Link>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deleniti officia ullam totam natus iusto eaque unde distinctio, pariatur quo quae cumque quod repellendus</span>
                    <hr />

                    <img src={beersImageTwo} />
                    <Link to="/random-beer">
                        <h2>Random Beer</h2>
                    </Link>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deleniti officia ullam totam natus iusto eaque unde distinctio, pariatur quo quae cumque quod repellendus</span>
                    <hr />

                    <img src={beersImageThree} />
                    <Link to="/new-beer">
                        <h2>New Beer</h2>
                    </Link>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo deleniti officia ullam totam natus iusto eaque unde distinctio, pariatur quo quae cumque quod repellendus</span>

                </Col>
            </Row>
        </Container>

    )
}
export default IndexPage