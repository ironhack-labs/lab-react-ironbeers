import { Col, Row } from "react-bootstrap"
import BeerCard from "../BeerCard/BeerCard"

const BeersList = ({ beers }) => {

    return (
        <Row>
            {beers.map(beer => {
                return (
                    <Col md={{ span: 4 }} className='mb-3'>
                        <BeerCard key={beer._id} beer={beer} />
                    </Col>
                )
            })}
        </Row>
    )
}

export default BeersList
