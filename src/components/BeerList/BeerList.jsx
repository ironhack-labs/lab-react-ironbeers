import { Col, Row } from "react-bootstrap"
import BeerCard from '../BeerCard/BeerCard';
const BeerList = ({ data }) => {

    return (
        <Row className="d-flex flex-wrap">
            <Col>
                {data?.map(elm => {
                    return < BeerCard key={elm._id} {...elm} />
                })}
            </Col>
        </Row>
    )


}

export default BeerList