import { Row, Col, Button } from "react-bootstrap"
import './HomeCard.css'

const HomeCard = ({ cardInfo }) => {
    return (
        <Row className="d-flex justify-content-center text-center huge-home-button">
            <Col className="mb-3" sm={{ span: 12 }}>
                <img src={cardInfo.image} />
            </Col>
            <Col md={{ span: 6 }} className="homeArticle">
                <h3>{cardInfo.title}</h3>
                <p>{cardInfo.description}</p>
            </Col>
        </Row>
    )
}

export default HomeCard