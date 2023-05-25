import { Col } from "react-bootstrap"
import BeerCard from "./BeerCard"


const BeersList = ({ beers }) => {

    return (
        beers.map(elm => {
            return (
                <Col md={{ span: 4 }} key={elm._id}>
                    <BeerCard {...elm} />
                </Col>
            )
        })
    )
}

export default BeersList