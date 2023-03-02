import BeerCard from "../BeerCard/BeerCard"
import { Col, Row } from "react-bootstrap"

const BeersList = ({ beers }) => {

    return (
        <Row>
            {
                beers.map(elm => {
                    return (
                        <Col md={{ span: 3 }} key={elm._id}>
                            <BeerCard {...elm} />
                        </Col>
                    )
                })
            }
        </Row>
    )
}

export default BeersList