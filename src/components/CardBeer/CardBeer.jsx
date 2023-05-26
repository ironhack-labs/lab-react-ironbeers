import { Card, Row, Col } from "react-bootstrap"
import "./CardBeer.css"


const CardBeer = ({ beer }) => {

    return (
        <Card className="p-4" >
            <Row className="ImgBeer">
                <Col md={{ span: 4 }}>
                    <img src={beer.image_url} alt="" />
                </Col>

                <Col md={{ span: 8 }}>
                    <h2>Name: {beer.name}</h2>
                    <hr />
                    <p> Tagline: {beer.tagline}</p>
                    <p> contributed_by: {beer.contributed_by}</p>

                </Col>
            </Row>
        </Card >

    )
}

export default CardBeer