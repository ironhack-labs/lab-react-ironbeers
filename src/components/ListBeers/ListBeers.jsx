import { Col } from "react-bootstrap"
import BeerCard from "../BeerCard/BeerCard"

const ListBeers = ({ beer }) => {

    return (
        beer.map(elm => {
            return (
                <Col md={{ span: 4 }} key={elm._id}>
                    <BeerCard {...elm} />
                </Col>
            )
        })
    )
}

export default ListBeers