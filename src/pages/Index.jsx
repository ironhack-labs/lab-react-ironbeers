import IndexCard from "../components/IndexCard/IndexCard"
import firstImage from "../assets/beers.png"
import secondImage from "../assets/random-beer.png"
import thirdImage from "../assets/new-beer.png"
import { Container, Row, Col } from "react-bootstrap"

const Index = () => {
    return (
        <Container>
            <Row className="justify-content-center align-items-center flex-column">
                <Col md={6}><IndexCard image={firstImage} title={"All Beers"} redirection={"/beers"}></IndexCard></Col>
                <Col md={6}><IndexCard image={secondImage} title={"Random Beers"} redirection={"/beers/random"}></IndexCard></Col>
                <Col md={6}><IndexCard image={thirdImage} title={"New Beer"} redirection={"/beers/new"}></IndexCard></Col>
            </Row>
        </Container >
    )
}
export default Index