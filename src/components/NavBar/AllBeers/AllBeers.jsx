import { Col, Row } from "react-bootstrap"
import BeerCard from "../BeersCard/BeersCard"


const AllBeers = ({ beers }) => {

    return (
        <Row>
            {
                beers.map(elm => {
                    return (
                        <Col md={{ span: 3 }} key={elm._id}>
                            <BeerCard {...elm}></BeerCard>
                        </Col>

                    )
                })

            }
        </Row>


    )
}

export default AllBeers