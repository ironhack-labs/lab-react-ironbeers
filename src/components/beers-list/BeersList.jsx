import { Row, Col } from 'react-bootstrap'
import BeerCard from '../beer-card/BeerCard'

const BeersList = ({ beers }) => {
    return (
        <Row>
            {beers.map(beer => {
                return (
                    <Col md={4} key={beer._id}>
                        <BeerCard {...beer} />
                    </Col>
                )
            })}
        </Row>
    )
}

export default BeersList