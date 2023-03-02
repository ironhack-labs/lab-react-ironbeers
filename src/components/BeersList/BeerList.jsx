import './BeerList.css'
import { Row, Col } from 'react-bootstrap'
import BeerCard from '../BeerCard/BeerCard'

const BeerList = ({ beers }) => {

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
export default BeerList

