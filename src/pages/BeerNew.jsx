import { Container, Row, Col } from "react-bootstrap";
import BeerForm from "../components/BeerForm/BeerForm";

const BeerNew = () => {

    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={6}>
                    <BeerForm></BeerForm>
                </Col>
            </Row>
        </Container>

    )

}

export default BeerNew