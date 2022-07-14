import { Row, Col, Button } from 'react-bootstrap'
import BeerCard from '../BeerCard/BeerCard'
import { Link } from 'react-router-dom'


const BeersList = ({ beersList }) => {
    console.log(beersList)
    return (
        <Row>
            {
                beersList.map(beer => {
                    return (<>
                        <Col md={3} key={beer._id} >
                            <BeerCard beer={beer} />
                            <Link to={`/beers/${beer._id}`}>
                                <div>
                                    <Button variant="dark" size="lg" as="div">Details</Button>
                                </div>
                            </Link>
                        </Col>

                    </>

                    )
                })
            }
        </Row>
    )
}

export default BeersList