import { Col } from "react-bootstrap"
import BeersCard from "../BeersCard/BeersCard"

const BeersList = ({ beers }) => {

    return (
        beers.map(elm => {
            return (
                <Col md={{ span: 4 }} key={elm._id}>
                    <BeersCard {...elm} />
                </Col>
            )
        })
    )
}

export default BeersList