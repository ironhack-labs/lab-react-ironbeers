import { Row, Col, Button } from 'react-bootstrap'
import BeerCard from '../BeerCard/BeerCard'
import { Link } from 'react-router-dom'

const BeersList = ({ beers }) => {
    console.log(beers)
    return (
        <Row>
            <Link to={'/'}>
                <div className="d-grid gap-2 mb-5">
                    <Button variant="dark">Go back</Button>
                </div>
            </Link>
            {beers.map(beer => {
                return <Col lg={12} key={beer._id}> <BeerCard {...beer} /> </Col>
            })}
        </Row>
    )
}

export default BeersList