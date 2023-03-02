import { Row, Col } from 'react-bootstrap'
import BeersCard from '../BeersCard/BeersCard'
import './BeersList.css'

const BeersList = ({ beers }) => {

    return (
        <Row>
            {
                beers.map(elm => {
                    <Col md={{ span: 3 }} key={elm._id}>
                        <BeersCard {...elm} />
                    </Col>
                })
            }
        </Row>
    )
}

export default BeersList