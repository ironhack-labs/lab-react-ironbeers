import { Col, Row } from "react-bootstrap";
import BeerCard from "../BeerCard/BeerCard";

const BeersList = ({ beers }) => {

    return (
        <>
            <Row>
                {
                    beers.map(elm => {
                        return (
                            <Col lg={{ span: 4 }} key={elm._id}>
                                <BeerCard {...elm} />
                            </Col>
                        )
                    })
                }
            </Row>
        </>
    )
}

export default BeersList




