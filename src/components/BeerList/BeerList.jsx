import { Col, Row } from 'react-bootstrap'
import BeerCard from '../BeerCard/BeerCard'


const BeerList = ({ beerData }) => {

    return (
        <Row>
            {
                beerData.map(beer => {
                    return (
                        <Col>
                            <BeerCard {...beer} />
                        </Col>
                    )
                })
            }
        </Row>
    )
}

export default BeerList